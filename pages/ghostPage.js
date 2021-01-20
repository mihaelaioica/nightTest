'use strict';

const util = require('util');

module.exports = {
    url: 'https://ghost.org/',
    elements: {
        resourcesMenu: {
          selector: 'header[id="gh-head"] div.js-dropdown',
          locateStrategy: 'css selector'
        },

        resourcesMenuOpened: 
        {
          selector: 'header[id="gh-head"] div.js-dropdown.is-open',
          locateStrategy: 'css selector'
        },

        searchButton:
        {
          selector: 'a[id="search-button"]',
          locateStrategy: 'css selector'
        },

        searchInput:
        {
          selector: 'input[id="search-input"]',
          locateStrategy: 'css selector'
        },

        searchResultsTitle:         {
          //selector: 'div[id="results"] div.gh-search-hit-content span.gh-search-hit-title',
          //index : 2
          selector: '//span[contains(@class,"gh-search-hit-title") and text()="%s"]',
          locateStrategy: 'xpath'          
        }       
      },

      commands: [{
        elementReplaced: function(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        }
    }]
  };