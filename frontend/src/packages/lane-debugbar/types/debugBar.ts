export interface IDebugBar {
  __meta: __meta;
  php: Php;
  messages: Messages;
  time: Time;
  memory: Memory;
  exceptions: Exceptions;
  views: Views;
  route: Route;
  queries: Queries;
  models: Models;
  symfonymailer_mails: Symfonymailer_mails;
  gate: Gate;
}
interface __meta {
  id: string;
  datetime: string;
  utime: number;
  method: string;
  uri: string;
  ip: string;
}
interface Php {
  version: string;
  "interface": string;
}
interface Messages {
  count: number;
  messages: MessagesItem[];
}
interface MessagesItem {
  message: string;
  message_html: null;
  is_string: boolean;
  label: string;
  time: number;
  xdebug_link: null;
  collector: string;
}
interface Time {
  start: number;
  end: number;
  duration: number;
  duration_str: string;
  measures: MeasuresItem[];
}
interface MeasuresItem {
  label: string;
  start: number;
  relative_start: number;
  end: number;
  relative_end: number;
  duration: number;
  duration_str: string;
  memory: number;
  memory_str: string;
  params: any[];
  collector: string;
}
interface Memory {
  peak_usage: number;
  peak_usage_str: string;
}
interface Exceptions {
  count: number;
  exceptions: any[];
}
interface Views {
  nb_templates: number;
  templates: any[];
}
interface Route {
  uri: string;
  middleware: string;
  as: string;
  controller: string;
  namespace: null;
  prefix: string;
  where: any[];
  file: string;
}
interface Queries {
  nb_statements: number;
  nb_visible_statements: number;
  nb_excluded_statements: number;
  nb_failed_statements: number;
  accumulated_duration: number;
  accumulated_duration_str: string;
  memory_usage: number;
  memory_usage_str: null;
  statements: StatementsItem[];
}
interface StatementsItem {
  sql: string;
  type: string;
  params: any[];
  bindings: string[];
  hints: null;
  show_copy: boolean;
  backtrace: BacktraceItem[];
  start: number;
  duration: number;
  duration_str: string;
  memory: number;
  memory_str: null;
  filename: string;
  source: Source;
  xdebug_link: Xdebug_link;
  connection: string;
  explain: null;
  start_percent: number;
  width_percent: number;
}
interface BacktraceItem {
  index: number;
  namespace: null | string;
  name: string;
  file: string;
  line: number;
}
interface Source {
  index: number;
  namespace: null;
  name: string;
  file: string;
  line: number;
}
interface Xdebug_link {
  url: string;
  ajax: boolean;
  filename: string;
  line: string;
}
interface Models {
  data: Data[];
  count: number;
  is_counter: boolean;
}
interface Data {
  [key: string]: {
    value: number;
    xdebug_link: Xdebug_link;
  };
}
interface Symfonymailer_mails {
  count: number;
  mails: any[];
}
interface Gate {
  count: number;
  messages: any[];
}
