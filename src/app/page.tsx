import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";

export default function Home() {
  const reportsDir = path.join(process.cwd(), "public", "reports");
  const reportPattern = /^DUVETICA_Report_\d{4}_\d{2}\.html$/;

  const latestReport = fs
    .readdirSync(reportsDir)
    .filter((file) => reportPattern.test(file))
    .sort()
    .at(-1);

  redirect(`/reports/${latestReport ?? "DUVETICA_Report_2026_03.html"}`);
}
