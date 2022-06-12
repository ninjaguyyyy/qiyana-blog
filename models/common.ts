import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement | null;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
