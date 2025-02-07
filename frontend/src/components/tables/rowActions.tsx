import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisIcon } from "lucide-react";
import DeleteButton from "@/components/buttons/deleteButton";
import { Row } from "@tanstack/react-table";

function TableRowActions<TData extends { name: any; id: number }>({
  row,
  action,
}: {
  row?: Row<TData>;
  action: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='xsIcon'>
          <EllipsisIcon size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DeleteButton
          action={action}
          message={`Are you sure you want to delete ${
            row ? JSON.stringify(row?.original?.name) : "selected"
          }?`}
          title='Delete'
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TableRowActions;
