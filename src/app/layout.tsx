import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
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
  metadataBase: new URL("https://your-vercel-domain.vercel.app"),
  openGraph: {
    title: "پنل کاربری دکاموند",
    description: "سیستم احراز هویت ساده با Next.js",
    url: "https://your-vercel-domain.vercel.app",
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
      <main
        className={`${inter.variable} ${vazirmatn.variable} antialiased bg-[#f5f6fa]`}
      >
        {children}
      </main>
    </html>
  );
}
