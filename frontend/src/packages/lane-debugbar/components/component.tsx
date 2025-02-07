"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { handleDebugBarLogs } from "@/packages/lane-debugbar/lib/debugBar";
import { getColorForResponseTime } from "@/packages/lane-debugbar/lib/timeUtils";
import { useDebugBar } from "@/packages/lane-debugbar/providers/debugBarProvider";
import { ChevronDown, CommandIcon } from "lucide-react";
import { useEffect, useState } from "react";
import TheBar from "./theBar";
import { Separator } from "@/components/ui/separator";
import WithTooltip from "@/components/withTooltip";

const DebugBar = () => {
  const { responses } = useDebugBar();
  const [duration, setDuration] = useState<{
    totalTime: number;
    totalTime_str: string;
  }>(null);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [models, setModels] = useState(null);

  useEffect(() => {
    if (responses && responses.totalTime) {
      const debugBarLogs = responses.responses
        .map((response) => {
          return response.messages.messages.concat(response.gate.messages);
        })
        .flat();

      setLoading(false);
      setDuration({
        totalTime: responses.totalTime,
        totalTime_str: responses.totalTime_str,
      });
      handleDebugBarLogs(debugBarLogs);
    }

    if (responses && responses.responses) {
      const debugBarQueries = responses.responses.reduce(
        (acc, cur) => acc + cur.queries.nb_statements,
        0
      );
      setQueries(debugBarQueries);

      const debugBarModels = responses.responses.reduce((acc, cur) => {
        Object.keys(cur.models.data).forEach((model) => {
          acc.add(model);
        });
        return acc;
      }, new Set()).size;

      setModels(debugBarModels);
    }
  }, [responses]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.stopPropagation();
      if ((event.metaKey || event.ctrlKey) && event.key === "d") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  if (!responses) return null;

  const renderTimeMeasures = () => (
    <div className='px-4 grid grid-cols-1 gap-2'>
      {responses?.responses?.map((response, index) => {
        return (
          <Card key={index}>
            <CardHeader className='p-4'>
              <CardTitle className='text-xl'>{response.route.uri}</CardTitle>
            </CardHeader>
            <Separator />
            {response.time?.measures?.map((measure, i) => (
              <CardContent key={i} className='p-4'>
                <div className='flex justify-between items-center'>
                  <h4 className='font-medium'>{measure.label}</h4>
                  <Badge
                    style={{
                      backgroundColor: getColorForResponseTime(
                        measure.duration_str
                      ),
                    }}
                  >
                    {measure.duration_str}
                  </Badge>
                </div>
                <div className='text-sm text-muted-foreground'>
                  <p>Memory: {measure.memory_str}</p>
                  <p>Start: {measure.relative_start}ms</p>
                </div>
              </CardContent>
            ))}
          </Card>
        );
      })}
    </div>
  );

  const renderQueries = () => (
    <Accordion
      type='single'
      collapsible
      className='w-full p-2 grid grid-cols-1 gap-4'
    >
      {responses?.responses?.map((query, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{query.route.uri ?? ""}</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className='grid grid-cols-1 gap-2'>
              {query.queries?.statements?.map((query, index) => (
                <AccordionItem key={index} value={`query-${index}`}>
                  <AccordionTrigger className='hover:no-underline'>
                    <div className='flex items-center gap-4'>
                      <Badge
                        style={{
                          backgroundColor: query.duration_str
                            ? getColorForResponseTime(query.duration_str)
                            : "",
                        }}
                      >
                        {query.duration_str}
                      </Badge>
                      <span className='text-sm font-mono truncate max-w-[500px]'>
                        {query.sql.substring(0, 50)}...
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='space-y-2 p-4 bg-muted rounded-md'>
                      <pre className='text-sm whitespace-pre-wrap'>
                        {query.sql}
                      </pre>
                      {query.bindings && query.bindings.length > 0 && (
                        <div className='mt-2'>
                          <h4 className='font-medium mb-1'>Bindings:</h4>
                          <pre className='text-sm'>
                            {JSON.stringify(query.bindings, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </Accordion>
  );

  const renderModels = () => (
    <div className='grid grid-cols-1 gap-2 p-2'>
      {responses?.responses?.map((response, index) => {
        return (
          <Card key={index} className='pb-4'>
            <CardHeader className='p-4'>
              <CardTitle className='text-xl'>{response.route.uri}</CardTitle>
            </CardHeader>
            <div className='flex flex-col gap-2 px-2'>
              {Object.entries(response.models?.data || {}).map(
                ([model, data]: [string, any], index) => (
                  <Card key={index} className='p-2'>
                    <div className='flex justify-between items-center'>
                      <h4 className='font-medium'>{model}</h4>
                      <Badge>{data.value} instances</Badge>
                    </div>
                  </Card>
                )
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );

  const renderCallers = () => (
    <div className='p-2 grid grid-cols-1 gap-2'>
      {responses?.responses?.map((res, i) => (
        <Card key={i}>
          <CardHeader className='p-4'>
            <CardTitle className='text-xl'>{res.route.uri}</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className='p-4 grid grid-cols-1 gap-2 overflow-auto'>
            <pre className='text-sm whitespace-pre-wrap'>{res.__meta.uri}</pre>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div>
      <TheBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        loading={loading}
        duration={duration}
        queries={queries}
        path={responses.path}
      />
      <div
        className={cn(
          `fixed max-h-[50vh] bottom-0 left-0 transition-all duration-300 right-0 bg-background shadow-lg border-t border-border z-50`,
          isOpen ? "h-full pb-12" : "!h-0"
        )}
      >
        <div className='relative'>
          {isOpen && (
            <WithTooltip
              trigger={
                <Button
                  size='xsIcon'
                  className='absolute left-2 -top-6 z-50'
                  onClick={() => setIsOpen(false)}
                >
                  <ChevronDown size={16} />
                </Button>
              }
              message={
                <span className='flex items-center gap-2'>
                  Close debugbar{" "}
                  <Badge className='rounded-md' variant='secondary'>
                    <CommandIcon size={16} /> + D
                  </Badge>
                </span>
              }
            />
          )}
        </div>
        <Tabs defaultValue='time' className='w-full h-full'>
          <TabsList className='w-full justify-start mb-4 rounded-none'>
            <TabsTrigger value='time'>
              Time ({duration?.totalTime_str})
            </TabsTrigger>
            <TabsTrigger value='queries'>Queries ({queries})</TabsTrigger>
            <TabsTrigger value='models'>Models ({models || 0})</TabsTrigger>
            <TabsTrigger value='route'>Route</TabsTrigger>
            <TabsTrigger value='callers'>Callers</TabsTrigger>
          </TabsList>
          <ScrollArea className='h-full mb-10'>
            <TabsContent value='time' className='mt-0'>
              {renderTimeMeasures()}
            </TabsContent>
            <TabsContent value='queries' className='mt-0'>
              {renderQueries()}
            </TabsContent>
            <TabsContent value='models' className='mt-0'>
              {renderModels()}
            </TabsContent>
            <TabsContent
              value='route'
              className='mt-0 p-2 grid grid-cols-1 gap-2'
            >
              {responses.responses.map((res, i) => (
                <Card key={i}>
                  <CardContent className='p-4 overflow-auto'>
                    <pre className='text-sm whitespace-pre-wrap'>
                      {JSON.stringify(res?.route, null, 2)}
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value='callers' className='mt-0'>
              {renderCallers()}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
};

export default DebugBar;
