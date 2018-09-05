const puppeteer = require('puppeteer');
const local = require('pup-local');

(async() => {
    console.log(local.storage);
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1200})
    await page.goto('https://html5demos.com/storage/', {waitUntil: 'networkidle2'});
    await local.restoreLocalStorage(page, `${__dirname}/local.json`);
    page.reload();
    await sleep(15000); // some time to watch your local storage
    browser.close();
})();


