import { IDebugBar } from "../packages/lane-debugbar/types/debugBar";

// Types for authentication-related data and methods
export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface ForgotPasswordProps {
  email: string;
}

export interface ResetPasswordProps {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface UseAuthOptions {
  middleware?: "guest" | "auth";
  redirectIfAuthenticated?: string;
}

export interface Data<T> {
  content?: T;
  debugbar?: IDebugBar;
  extras: any;
  message: string;
  status: boolean;
}

export type RelationType<T> = {
  [K in keyof T]: T[K] extends Array<any> | undefined
    ? K
    : T[K] extends object | undefined
    ? K
    : never;
}[keyof T];

export interface IDebugLog {
  message: string;
  message_html: null;
  is_string: boolean;
  label: string;
  time: number;
  xdebug_link: null;
  collector: string;
}
