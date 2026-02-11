import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUVETICA 브랜드 2026년 1월 경영 보고서",
  description: "경영관리팀 FP&A | DUVETICA 브랜드 월간 경영 보고서",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
