const { chromium } = require('playwright');
const expect = require('expect');
const isElementExist = require('./rozetka.js');

global.expect = expect;

describe('Rozetka Cart Presence', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    jest.setTimeout(10000);
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://rozetka.com.ua/');
  });

  afterEach(async () => {
    await context.close();
  });

  it('should have a cart on the page', async () => {
    const cartExists = await isElementExist(page, '.header-cart__icon');
    expect(cartExists).toBeTruthy();
  });
});