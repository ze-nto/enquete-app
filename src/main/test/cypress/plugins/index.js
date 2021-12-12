const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor.js')

/// <reference types="cypress" />

/**
* @type {Cypress.PluginConfig}
*/

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
}
