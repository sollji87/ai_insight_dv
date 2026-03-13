const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));
  await page.pdf({
    path: path.resolve(__dirname, 'DUVETICA_Report_2026_01.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '8mm', bottom: '10mm', left: '8mm' },
  });
  console.log('PDF 저장 완료: DUVETICA_Report_2026_01.pdf');
  await browser.close();
})();
