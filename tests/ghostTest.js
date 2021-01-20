'use strict';

var page, data;

describe('Ghost page test suite', async function() {  
  
  
  before(async function(browser) {
    this.ghostPage = await browser.page.ghostPage();
    page =  await require('../pages/actions').pageActions(this.ghostPage);
    data = await require('../testsConfig/ghostTestData.json');
  });


  test('Start Ghost page', async () => {
    await this.ghostPage.navigate();  
    await page.verifyContainsUrl(data.ghostTest.partialUrl);
    await page.verifyPageTitle(data.ghostTest.pageTitle); 
  });


  test('Navigate to "Comunity Forum" using the Resources menu', async () => {
    await this.ghostPage.useCss();
    await page.click('@resourcesMenu');
    await page.verifyElementIsVisible('@resourcesMenuOpened');
  });


  test('Search for "create new blog" ', async () => {
    await this.ghostPage.useCss();
    await page.click('@searchButton');
    await page.click('@searchInput');
    await page.setValue('@searchInput',data.ghostTest.searchText);
    await page.verifyValue('@searchInput',data.ghostTest.searchText);
  });


  test('Open one of the search results', async () => {
    await this.ghostPage.useXpath();
    await page.click(this.ghostPage.elementReplaced('@searchResultsTitle', data.ghostTest.openPageWithTitle));          
    await page.verifyContainsUrl(data.ghostTest.openedUrl);   
  });

  after(async browser => await browser.end());
});

