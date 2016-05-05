var selenium = require('selenium-webdriver')
var chai     = require('chai')
var expect   = chai.expect
chai.use(require('chai-as-promised'))

// SauceLabs Specific
var sauceLabsUsername = process.env.SAUCE_USERNAME
var sauceLabsAccessKey = process.env.SAUCE_ACCESS_KEY

var sauceLabsCapabilities = {
  'browserName': 'chrome',
  'platform': 'Windows XP',
  'version': '43.0',
  'username': sauceLabsUsername,
  'accessKey': sauceLabsAccessKey
}

var sauceLabsServer = "http://" + sauceLabsUsername + ":" + sauceLabsAccessKey + "@ondemand.saucelabs.com:80/wd/hub"

// BrowserStack Specific
var browserStackUsername = process.env.BROWSER_STACK_USERNAME
var browserStackAccessKey = process.env.BROWSER_STACK_ACCESS_KEY

var browserStackCapabilities = {
  'browserName' : 'Chrome',
  'os' : 'Windows',
  'os_version' : 'XP',
  'browserstack.user': browserStackUsername,
  'browserstack.key': browserStackAccessKey,
  'browserstack.debug': true
}

var browserStackServer = 'http://hub.browserstack.com/wd/hub'

var driver = new selenium.Builder()
  .withCapabilities(sauceLabsCapabilities)
  .usingServer(sauceLabsServer)
  .build()
driver.getWindowHandle()

driver.get('https://example.cypress.io/')
expect(driver.getTitle()).to.eventually.contain('Cypress.io: Kitchen Sink')

driver.get('https://example.cypress.io/commands/querying')

// We can get DOM elements by id
var text = driver.findElement({id: 'query-btn'}).getText()
expect(text).to.eventually.equal('Button')

// We can get DOM elements by class
text = driver.findElement({css: '.query-btn'}).getText()
expect(text).to.eventually.equal('Button')

// we can CSS selectors just like jQuery
// text = driver.findElement({css: '#querying .well>button:first'}).getText()
// expect(text).to.eventually.equal('Button')

driver.quit()
