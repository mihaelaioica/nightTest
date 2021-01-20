'use strict';

var page, data;

describe('Way2Automation Page test suite', async function () {

  before(async function (browser) {
    this.wayAutomationPage = await browser.page.wayAutomationPage();
    page = await require('../pages/actions').pageActions(this.wayAutomationPage);
    data = await require('../testsConfig/wayAutomationData.json');
  });


  test('Start Way2Automation Page', async () => {
    await this.wayAutomationPage.navigate();
    await page.verifyContainsUrl(data.wayAutomation.partialUrl);
    await page.verifyPageTitle(data.wayAutomation.pageTitle);
  });


   test('Fill in the mandatory info and submit the form', async () => {
    await this.wayAutomationPage.useCss();    
    await page.setValue('@registrationName',data.wayAutomation.registrationName);
    await page.verifyValue('@registrationName',data.wayAutomation.registrationName);

    await page.setValue('@registrationPhone',data.wayAutomation.registrationPhone);
    await page.verifyValue('@registrationPhone',data.wayAutomation.registrationPhone);

    await page.setValue('@registrationEmail', data.wayAutomation.registrationEmail);
    await page.verifyValue('@registrationEmail', data.wayAutomation.registrationEmail);

    await page.click(this.wayAutomationPage.elementReplaced('@registrationCountry', data.wayAutomation.registrationCountry));
    await page.verifyText(this.wayAutomationPage.elementReplaced('@registrationCountry', data.wayAutomation.registrationCountry), data.wayAutomation.registrationCountry);

    await page.setValue('@registrationCity', data.wayAutomation.registrationCity);
    await page.verifyValue('@registrationCity', data.wayAutomation.registrationCity);

    await page.setValue('@registrationUsername',data.wayAutomation.registrationUsername);
    await page.verifyValue('@registrationUsername',data.wayAutomation.registrationUsername);

    await page.setValue('@registrationPassword',data.wayAutomation.registrationPassword);
    await page.verifyValue('@registrationPassword',data.wayAutomation.registrationPassword);

    await page.click('@submitButton');
    await page.waitForElementToNotBePresent('@registrationFormOpened');
  }); 



  /*test('Sign In', async () => {
    await this.wayAutomationPage.useCss();
    await page.click('@signIn');
    await page.setValue('@loginUsername', 'aleahimiTest');
    await page.verifyValue('@loginUsername', 'aleahimiTest');
    await page.setValue('@loginPassword', 'aleahimiTest2021!');
    await page.verifyValue('@loginPassword', 'aleahimiTest2021!');
    await page.click('@loginSubmitButton');
    await page.waitForElementToNotBePresent('@loginFormOpened');
  });*/



  test('Open "Widget" and "Date picker"', async () => {
    await this.wayAutomationPage.useXpath();
    await page.click(this.wayAutomationPage.elementReplaced('@openMenu', 'Widget'));
    await page.click(this.wayAutomationPage.elementReplaced('@openMenu', 'Datepicker'));
    await this.wayAutomationPage.useCss();
    await page.verifyText('@datePickerHeader', 'Datepicker');
  });



  test('Navigate to the "FORMAT DATE" section, set and validate current Date against ISO format', async browser => {
    await this.wayAutomationPage.useXpath();
    await page.click(this.wayAutomationPage.elementReplaced('@formatDateSection', 'Format date'));

    var currentDate = new Date(Date.now()).toLocaleString().split(',')[0];  // 1/18/2021, 6:21:30 PM => 1/18/2021     
    var currentDateFormatIso = new Date(Date.now()).toISOString().split('T')[0]; // 2021-01-18T18:34:12.967Z => 2021-01-18    

    await browser.frame(3);
    await browser.useCss();
    await browser.click(this.wayAutomationPage.elem('@dateInput'));
    await browser.setValue(this.wayAutomationPage.elem('@dateInput'), currentDate);
    await browser.pause(1000);

    await browser.useXpath()
    await browser.click(this.wayAutomationPage.elementReplaced('@formatDateOptions', 'ISO 8601 - yy-mm-dd'))
    await browser.pause(2000);

    await browser.useCss()
    await browser.getValue(this.wayAutomationPage.elem('@dateInput'), async function (result) {
        await this.assert.equal(typeof result, "object");
        await this.assert.equal(result.status, 0);
        await this.assert.equal(result.value, currentDateFormatIso);
      });

  });


  after(async browser => await browser.end());
});

