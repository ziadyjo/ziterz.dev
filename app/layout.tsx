import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziady Mubaraq",
  description: "Full-Stack Engineer & AI Builder based in Jakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background-primary font-sans text-foreground-primary">
        {children}
      </body>
    </html>
  );
}
