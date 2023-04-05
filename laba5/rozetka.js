module.exports = async (page, selector) => {
    const element = await page.$(selector);
    return element !== null;
  };