const assert = require('assert');
const { Builder, By } = require('selenium-webdriver');

describe('Google homepage', function() {
  let driver;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com/');
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('should open Google homepage and verify title and search button', async function() {
    const title = await driver.getTitle();
    assert.strictEqual(title, 'Google');

    // Перевірити наявність кнопки "пошук"
    const searchButton = await driver.findElement(By.name('btnK'));
    assert.ok(await searchButton.isDisplayed());
  });
});

