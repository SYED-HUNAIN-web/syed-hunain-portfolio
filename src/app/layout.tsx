import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Syed Hunain | Web Developer & UI/UX Designer - 3D Web Experiences",
  description:
    "Syed Hunain is a creative web developer specializing in interactive 3D web experiences, modern animations, and high-performance React applications.",
  keywords: [
    "Syed Hunain",
    "Web Developer",
    "UI/UX Designer",
    "3D Web",
    "React",
    "Next.js",
    "Three.js",
    "Frontend Developer",
    "Pakistan",
  ],
  authors: [{ name: "Syed Hunain" }],
  openGraph: {
    type: "website",
    title: "Syed Hunain | Web Developer & UI/UX Designer",
    description:
      "Creative web developer specializing in interactive 3D web experiences and modern animations.",
    siteName: "Syed Hunain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Hunain | Web Developer & UI/UX Designer",
    description:
      "Creative web developer specializing in interactive 3D web experiences and modern animations.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png?v=2" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
      </head>
      <body
        className={`${sans.variable} ${display.variable} min-h-screen bg-background text-foreground selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
