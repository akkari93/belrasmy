import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "بلرسمي | Belrasmy - مجتمع لمكافحة المغالاة في أسعار السيارات",
  description: "Belrasmy - Community platform fighting car price gouging in Egypt. Verify car prices and share purchase experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${notoSansArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LocaleProvider>
          <AppShell>{children}</AppShell>
        </LocaleProvider>
      </body>
    </html>
  );
}

// Separate client component for interactive parts (header with locale toggle, footer)
import AppShellClient from "./app-shell-client";

function AppShell({ children }: { children: React.ReactNode }) {
  return <AppShellClient>{children}</AppShellClient>;
}
