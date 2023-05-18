// /// <reference types="cypress" />

// context('Date Pickers', () => {
//   beforeEach(() => {
//     cy.setCookie('exit_popup_dismissed', 'closed');
//     cy.visit('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
//   })

//   const today = new Date();
//   const yyyy = today.getFullYear();
//   let mm = today.getMonth() + 1; // Months start at 0!
//   let dd = today.getDate();

//   if (dd < 10) dd = '0' + dd;
//   if (mm < 10) mm = '0' + mm;


//   // function to get header index by label
//   function getHeaderIndexByLabel(label) {
//     const headers = document.querySelectorAll('table th');
//     for (let i = 0; i < headers.length; i++) {
//       if (headers[i].textContent.trim() === label.trim()) {
//         return i;
//       }
//     }
//     return -1; // if label not found in table headers
//   }

//   // function to get body elements by column index

//   // const formattedToday = yyyy+'-'+mm+'-'+dd; -- concatenation
//   const formattedToday = "${yyyy}-${mm}-${dd}"; //string interpolation

//   it('Date Picker', () => { 
//     cy.get('#birthday').type(formattedToday);
//     cy.get('#birthday').should('have.value', formattedToday);
//   })
// })