const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const publicReportsDir = path.join(projectRoot, "public", "reports");
const reportPattern = /^DUVETICA_Report_\d{4}_\d{2}\.(html|pdf)$/i;

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function syncReports() {
  ensureDirectory(publicReportsDir);

  const files = fs
    .readdirSync(projectRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile() && reportPattern.test(entry.name))
    .map((entry) => entry.name);

  if (files.length === 0) {
    console.log("No report files found to sync.");
    return;
  }

  for (const file of files) {
    const sourcePath = path.join(projectRoot, file);
    const destinationPath = path.join(publicReportsDir, file);
    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`Synced ${file} -> public/reports/${file}`);
  }
}

syncReports();
