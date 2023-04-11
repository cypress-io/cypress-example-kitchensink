const addContext = require('mochawesome/addContext')

// NOTE: import this file in cypress/support/e2e.js
// import '../../custom_support_file';
// require('../../custom_support_file');

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      let item = runnable
      const nameParts = [runnable.title]
  
      // Iterate through all parents and grab the titles
      while (item.parent) {
        nameParts.unshift(item.parent.title)
        item = item.parent
      }
      
      if(runnable.hookName) {
        nameParts.push(`${runnable.hookName} hook`)
      }
      const fullTestName = nameParts
              .filter(Boolean)
              .join(' -- ')           // this is how cypress joins the test title fragments
  
      const imageUrl = `${fullTestName} (failed).png`
      addContext({ test }, imageUrl)
    }
  })
