"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const CustomCursor = dynamic(() => import("@/Components/Global/CustomCursor"), { ssr: false });
const ReadingProgress = dynamic(() => import("@/Components/Global/ReadingProgress"), { ssr: false });

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ReadingProgress />
      {children}
    </>
  );
}
