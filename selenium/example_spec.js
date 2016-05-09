var selenium = require('selenium-webdriver')
var chai     = require('chai')
var expect   = chai.expect
chai.use(require('chai-as-promised'))

// ----------------SauceLabs Specific----------------
var sauceLabsUsername = process.env.SAUCE_USERNAME
var sauceLabsAccessKey = process.env.SAUCE_ACCESS_KEY

var sauceLabsCapabilities = {
  'browserName': 'internet explorer',
  'version': '8.0',
  'platform': 'Windows XP',
  'username': sauceLabsUsername,
  'accessKey': sauceLabsAccessKey
}

var sauceLabsServer = "http://" + sauceLabsUsername + ":" + sauceLabsAccessKey + "@ondemand.saucelabs.com:80/wd/hub"

// -----------BrowserStack Specific----------------------
var browserStackUsername = process.env.BROWSER_STACK_USERNAME
var browserStackAccessKey = process.env.BROWSER_STACK_ACCESS_KEY

var browserStackCapabilities = {
  'browserName' : 'internet explorer',
  'os' : 'Windows',
  'os_version' : 'XP',
  'browserstack.user': browserStackUsername,
  'browserstack.key': browserStackAccessKey,
  'browserstack.debug': true,
  'browserstack.local': true
}

var browserStackServer = 'http://hub.browserstack.com/wd/hub'

// -----------Testing Bot Specific----------------------
var testingBotUsername = process.env.TESTING_BOT_USERNAME
var testingBotAccessKey = process.env.TESTING_BOT_ACCESS_KEY

var testingBotCapabilities = {
  'browserName' : 'internet explorer',
  'os' : 'Windows',
  'os_version' : 'XP',
  'browserstack.user': testingBotUsername,
  'browserstack.key': testingBotAccessKey,
  'browserstack.debug': true,
  'browserstack.local': true
}

var testingBotServer = 'http://hub.browserstack.com/wd/hub'

// -----------------------------------------------------

var webdriverio = require('webdriverio'),
  client = webdriverio.remote({
    desiredCapabilities: {
      browserName: 'firefox',
      version: '27',
      platform: 'WINDOWS',
      name: 'This is an example test'
    },
    host: 'hub.testingbot.com',
    port: 80,
    user: '46bb12ad63024039b80cead0c3c14855',
    key: 'cb06ddfdb8e7350401bd0f1584da7288',
    logLevel: 'silent'
}).init();

client
  .url('https://example.cypress.io')
  .getTitle(function(err,title) {
      console.log(title);
  })
  .url('https://example.cypress.io/commands/querying')
  .click('.query-btn')
  .pause(1000)
  .end();

// var driver = new selenium.Builder()
//   .withCapabilities(sauceLabsCapabilities)
//   .usingServer(sauceLabsServer)
//   .build()
// driver.getWindowHandle()

// driver.get('http://localhost:8080')
// expect(driver.getTitle()).to.eventually.contain('Cypress.io: Kitchen Sink')

// driver.get('https://example.cypress.io/commands/querying')

// // We can get DOM elements by id
// var text = driver.findElement({id: 'query-btn'}).getText()
// expect(text).to.eventually.equal('Button')

// // We can get DOM elements by class
// text = driver.findElement({css: '.query-btn'}).getText()
// expect(text).to.eventually.equal('Button')

// // we can CSS selectors just like jQuery
// // text = driver.findElement({css: '#querying .well>button:first'}).getText()
// // expect(text).to.eventually.equal('Button')

// driver.quit()
