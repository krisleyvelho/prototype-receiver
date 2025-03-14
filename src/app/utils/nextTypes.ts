import type { ReactNode, Usable } from "react";

// Type do next <= 14
// type SearchParamsType = Record<string, string>;
// type ParamsType = Record<string, any>;

// Type do next >= 15
export type SearchParamsType = Promise<
  Record<string, string | string[] | undefined>
>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ParamsType = Usable<Record<string, any>>;

export interface RootLayoutProps {
  children: ChildrenType;
  params?: Promise<ParamsType | ParamsType[]>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type ChildrenType = React.ReactNode;

export interface PageProps {
  params: ParamsType;
  searchParams: SearchParamsType;
}

export interface TabProps {
  body: ReactNode;
  footer?: ReactNode;
}
