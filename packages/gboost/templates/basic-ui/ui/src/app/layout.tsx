// @ts-nocheck
import "./globals.css";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { ThemeRegistry } from "@/components/theme/ThemeRegistry";
import type { Metadata } from "next";
import { clientConfig } from "@/config/client-config";
import AppLayout from "@/components/layout/AppLayout";

export const metadata: Metadata = {
  title: clientConfig.appTitle,
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = headers();
  const nonce = headersList.get("x-nonce");
  return (
    <html lang="en">
      <head></head>
      <body>
        <ThemeRegistry nonce={nonce}>
          <AppLayout>{children}</AppLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
