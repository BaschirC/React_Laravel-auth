"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useFetch from "@/hooks/useFetch";
import { buildQuery } from "@/queries/queryBuilder";
import { useMutation } from "@tanstack/react-query";
import {
  CheckCircleIcon,
  FileSpreadsheetIcon,
  Loader2Icon,
  TableIcon,
  UploadCloudIcon,
  XCircleIcon,
} from "lucide-react";
import { ChangeEvent, useState } from "react";
import * as XLSX from "xlsx";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import WithTooltip from "./withTooltip";

interface SheetData {
  [key: string]: string | number | boolean | null;
}

const UploadExcel = ({ productsOnly = false }: { productsOnly?: boolean }) => {
  const [data, setData] = useState<SheetData[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [open, setOpen] = useState(false);
  const { fetchClient, invalidate } = useFetch();

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const buffer = e.target?.result;
        if (buffer instanceof ArrayBuffer) {
          const workbook = XLSX.read(buffer, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const sheetData: SheetData[] = XLSX.utils.sheet_to_json(sheet);
          console.log(sheetData, "the data");
          setData(sheetData);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const {
    mutate,
    isPending,
    isSuccess,
    isError,
    reset,
    data: res,
  } = useMutation({
    mutationFn: async () => {
      const url = buildQuery({
        path: `products/create-bulk?productsOnly=${productsOnly}`,
      });

      const { data: res } = await fetchClient({
        method: "POST",
        url,
        body: data,
      });

      return res;
    },
    onSuccess() {
      invalidate([["recipes"], ["products"]]);
    },
  });

  const resetState = () => {
    setData([]);
    setFileName("");
    reset();
  };

  const renderStatus = () => {
    if (isSuccess) {
      return (
        <div className='flex flex-col items-center gap-2'>
          <Alert className='bg-green-50 border-green-200'>
            <CheckCircleIcon className='h-4 w-4 text-green-600' />
            <AlertDescription className='text-green-600'>
              Products successfully uploaded!
            </AlertDescription>
          </Alert>
          <Button onClick={resetState}>Upload Another File</Button>
        </div>
      );
    }

    if (isError) {
      return (
        <div className='flex flex-col items-center gap-2'>
          <Alert className='bg-red-50 border-red-200'>
            <XCircleIcon className='h-4 w-4 text-red-600' />
            <AlertDescription className='text-red-600'>
              Error uploading products. Please try again.
            </AlertDescription>
          </Alert>
          <Button onClick={resetState}>Upload Another File</Button>
        </div>
      );
    }

    return null;
  };

  const renderTable = () => {
    if (!data.length) return null;

    const headers = Object.keys(data[0]);

    return (
      <div className='mt-4 max-h-[50vh] grid grid-cols-1 relative'>
        <div className='flex items-center gap-2 mb-2'>
          <TableIcon className='h-4 w-4' />
          <span className='text-sm font-medium'>Data Preview</span>
        </div>
        <div className='max-h-[calc(100vh-300px)] relative overflow-auto border rounded-lg'>
          <Table>
            <TableHeader className='sticky top-0 z-10'>
              <TableRow>
                {headers.map((header) => (
                  <TableHead key={header}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {headers.map((header) => (
                    <TableCell key={header}>{String(row[header])}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          <WithTooltip
            message='Upload from Excel'
            trigger={
              <Button variant='outline'>
                <UploadCloudIcon size={16} />
              </Button>
            }
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className={`${
          isPending
            ? "w-[300px] flex justify-center items-center"
            : data.length && !res
            ? "h-[90vh]"
            : "w-[400px]"
        }`}
      >
        <DialogHeader>
          <DialogTitle>Upload Products</DialogTitle>
        </DialogHeader>
        {isPending ? (
          <Loader2Icon size={42} className='animate-spin' />
        ) : res || isError ? (
          renderStatus()
        ) : (
          <div className='grid grid-cols-1 gap-2 p-2 h-full overflow-auto'>
            <div className='flex items-center gap-2'>
              <FileSpreadsheetIcon className='h-5 w-5 text-green-600' />
              <span className='font-medium'>Upload Excel File</span>
            </div>

            <div className='relative'>
              <Input
                type='file'
                accept='.xlsx, .xls'
                onChange={handleFileUpload}
              />
            </div>

            <div className='flex flex-col gap-2'>
              {fileName && (
                <div className='text-sm text-gray-600'>
                  Selected file: {fileName}
                </div>
              )}

              {data.length > 0 && (
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <CheckCircleIcon className='h-4 w-4 text-green-600' />
                  {data.length} products found
                </div>
              )}
            </div>

            {renderTable()}

            <Button
              onClick={() => mutate()}
              disabled={!data.length || isPending}
              className='mt-2'
            >
              <UploadCloudIcon size={16} className='mr-2' />
              Upload Products
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UploadExcel;
