import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { TitleUpdater } from "./TitleUpdater";

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
  title: "Dashboard",
  description: "Authentication system with Next.js",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "User Authentication Dashboard",
    description: "A simple authentication system with Next.js",
    url: "https://your-domain.com",
    siteName: "Auth Dashboard",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultTitle =
    typeof metadata.title === "string" ? metadata.title : "App";

  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`transition-colors duration-300 ${inter.variable} ${vazirmatn.variable}`}
      >
        <Providers>
          <TitleUpdater defaultTitle={defaultTitle} />
          <main className="antialiased">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
