'use strict';

const explicitTimeout = 10000;

const pageActions = async (page) => ({

    async waitForElementToNotBePresent(element)
    {
        await page.waitForElementNotPresent(element, explicitTimeout);
    },
    
    
    async click(element)
    {
        await page.waitForElementVisible(element, explicitTimeout);
        await page.waitForElementPresent(element, explicitTimeout);
        await page.click(element);
    },


    async setValue(element, value)
    {
        await page.waitForElementVisible(element, explicitTimeout);
        await page.click(element);
        await page.setValue(element, value);        
    },


    async getValue(element)
    {
        await page.waitForElementVisible(element, explicitTimeout);
        await page.waitForElementPresent(element, explicitTimeout);
        return await page.getValue(element);
    },


    async getText(element)
    {
        await page.waitForElementVisible(element, explicitTimeout);
        await page.waitForElementPresent(element, explicitTimeout);
        return await page.getText(element);
    },


    async verifyContainsUrl(url)
    {
        await page.assert.urlContains(url)
    },


    async verifyPageTitle(title)
    {
        await page.assert.title(title);
    },


    async verifyValue(element,value)
    {
       await page.assert.valueContains(element, value);
    },


    async verifyText(element,text)
    {
       await page.assert.containsText(element, text);
    },


    async verifyElementIsVisible(element)
    {
        await page.assert.visible(element, "Verify element is visible in the DOM");
    },


    async verifyElementIsNotPresent(element)
    {
        await page.assert.not.elementPresent(element,"Verify element is not present anymore in the DOM");
    }
   

});

module.exports = {
    pageActions   
}

