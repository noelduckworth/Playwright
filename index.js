const puppeteer = require('puppeteer');

async function checkBrokenLinks(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url); // Replace with the URL of the page you want to check

    const links = await page.$$eval('a', (elements) => elements.map((el) => el.href));
    const linkResponses = [];

    for (const link of links) {
        const response = await page.goto(link, { waitUntil: 'networkidle0', timeout: 50000 });
        if (response !== null) { // Add null check here
            const status = response.status();
            linkResponses.push({ link, status });
        }
    }

    const brokenLinks = linkResponses.filter((linkResponse) => linkResponse.status >= 400);
    const validLinks = linkResponses.filter((linkResponse) => linkResponse.status === 200);

    console.log("Broken links:", brokenLinks);
    console.log("Valid links:", validLinks);

    await browser.close();
}

checkBrokenLinks('https://www.demoblaze.com/');
