const { chromium } = require('playwright');

describe('Google Homepage', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    jest.setTimeout(10000);
    page = await browser.newPage();
    await page.goto('https://www.google.com/');
  });

  afterEach(async () => {
    await page.close();
  });

  it('should have the correct title', async () => {
    const title = await page.title();
    expect(title).toBe('Google');
  });

  it('should have a search bar', async () => {
    const searchBarExists = await page.waitForSelector('input[name=q]', { visible: true });
    expect(searchBarExists).toBeTruthy();
  });
  

  it('знайти кнопку', async () => {
    const searchButtonExists = await page.waitForSelector('input[name=btnK]', { timeout: 10000 });
    expect(searchButtonExists).toBeTruthy();
  });
  
  

  it('should not have an invisible element with ID "fakeElement"', async () => {
    const fakeElementExists = await page.isVisible('#fakeElement');
    expect(fakeElementExists).toBeFalsy();
  });

  it('не повинно бути посилання наYahoo', async () => {
    const linkToYahooExists = await page.isVisible('a[href*="yahoo"]');
    expect(linkToYahooExists).toBeFalsy();
  });

  it('sповинна бути правильна мова', async () => {
    const language = await page.getAttribute('html', 'lang');
    expect(language).toBe('es');
  });
});
