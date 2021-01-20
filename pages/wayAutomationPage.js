'use strict';

const util = require('util');

module.exports = {
    url: ' http://way2automation.com/way2auto_jquery/index.php',
    elements: {
        registrationFormOpened:
        {
            selector : 'div[id="load_box"]',
            locateStrategy: 'css selector'
        },

        registrationName: {
            selector: 'div[id="load_box"] input[name="name"]',
            locateStrategy: 'css selector'
        },

        registrationPhone: {
            selector: 'div[id="load_box"] input[name="phone"]',
            locateStrategy: 'css selector'
        },

        registrationEmail: {
            selector: 'div[id="load_box"] input[name="email"]',
            locateStrategy: 'css selector'
        },

        registrationCountry: {
            selector: 'div[id="load_box"] select[name="country"] option[value="%s"]',
            locateStrategy: 'css selector'
        },


        registrationCity: {
            selector: 'div[id="load_box"] input[name="city"]',
            locateStrategy: 'css selector'
        },

        registrationUsername: {
            selector: 'div[id="load_box"] input[name="username"]',
            locateStrategy: 'css selector'
        },

        registrationPassword: {
            selector: 'div[id="load_box"] input[name="password"]',
            locateStrategy: 'css selector'
        },

        submitButton:
        {
            selector: 'div[id="load_box"] input[type="submit"]',
            locateStrategy: 'css selector'
        },

        signIn:
        {
            selector: 'div[id="load_box"] a.fancybox' ,
            locateStrategy: 'css selector'
        },


        loginUsername:
        {
            selector: 'div[id="login"] input[name="username"]',
            locateStrategy: 'css selector'
        },


        loginPassword:
        {
            selector: 'div[id="login"] input[name="password"]',
            locateStrategy: 'css selector'
        },


        loginSubmitButton:
        {
            selector: 'div[id="login"] input[type="submit"]',
            locateStrategy: 'css selector'
        },

        loginFormOpened:
        {
            selector : 'div[id="login"]',
            locateStrategy: 'css selector'
        },

        openMenu: {           
            selector: '//nav[@id="main-nav"]//ul[@id="toggleNav"]//a[text()="%s"]',
            locateStrategy: 'xpath'
        },

        datePickerHeader: 
        {
            selector: 'h1.heading',
            locateStrategy: 'css selector'
        },

        formatDateSection:
        {
            selector: '//ul[@class="responsive-tabs"]//a[text()="%s"]',
            locateStrategy: 'xpath'
        },

        dateInput:
        {
            selector: 'input[id="datepicker"]',
            locateStrategy: 'css selector'
        },
        
        formatDateOptions:
        {
            selector: '//select[@id="format"]/option[text()="%s"]',
            locateStrategy: 'xpath'
        }

    },

    commands: [{
        elementReplaced: function(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        elem: function(elementName) {
            var element = this.elements[elementName.slice(1)];
            return element.selector;
        }
    }]
}