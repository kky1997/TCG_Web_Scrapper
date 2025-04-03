import puppeteer from 'puppeteer';

// puppeteer uses an IIAFE
// I assume this is to avoid needing to call this async function else where, it's just immediately invoked
// variable scope is also just within the async function I think?
(async () => {
    // puppeteer function body
    const browser = await puppeteer.launch(); // Launch headless browser
    const page = await browser.newPage();
  
    await page.goto('https://news.ycombinator.com');
  
    const headlines = await page.$$eval('.titleline > a', links =>
      links.map(link => link.textContent)
    );

    console.log("is array: " + Array.isArray(headlines));
  
    console.log('Headlines from ycombinator news syndication server:');
    console.log(headlines.slice(0, 7)); // just print first 7
  
    await browser.close();
  })();