import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { CustomCursor } from "./custom-cursor";
import { Navbar } from "./navbar";
import { SmoothScroll } from "./smooth-scroll";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      {children}
      <Toaster theme="dark" position="bottom-right" richColors />
    </>
  );
}
