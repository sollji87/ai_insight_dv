const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  const html = await page.evaluate(() => {
    let allCSS = '';
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) allCSS += rule.cssText + '\n';
      } catch (e) {}
    }
    return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>DUVETICA 브랜드 2026년 1월 경영 보고서</title>
  <style>
${allCSS}
@media print { @page { size: A4; margin: 10mm 8mm; } }
  </style>
</head>
<body>${document.body.innerHTML}</body>
</html>`;
  });

  fs.writeFileSync(
    path.resolve(__dirname, 'DUVETICA_Report_2026_01.html'),
    html,
    'utf-8'
  );
  console.log('HTML 저장 완료: DUVETICA_Report_2026_01.html');
  await browser.close();
})();
