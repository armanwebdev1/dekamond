import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "پنل کاربری دکاموند",
  description: "سیستم احراز هویت ساده با Next.js",
  metadataBase: new URL("https://dekamond-xi.vercel.app"),
  openGraph: {
    title: "پنل کاربری دکاموند",
    description: "سیستم احراز هویت ساده با Next.js",
    url: "https://dekamond-xi.vercel.app",
    siteName: "Dekamond Auth",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider>
          <main
            className={`${inter.variable} ${vazirmatn.variable} antialiased transition-colors duration-300`}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
