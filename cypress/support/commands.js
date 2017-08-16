// ***********************************************
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/commands
// ***********************************************
//
// Cypress.Command.add("login", function(email, password){
//   var email    = email || "joe@example.com"
//   var password = password || "foobar"
//
//   var log = Cypress.log({
//     name: "login",
//     message: [email, password],
//     onConsole: function(){
//       return {
//         email: email,
//         password: password
//       }
//     }
//   })
//
//   cy.visit("/login", {log: false})
//   cy.contains("Log In", {log: false})
//   cy.get("#email", {log: false})
//      .type(email, {log: false})
//   cy.get("#password", {log: false})
//     .type(password, {log: false})
//   cy.get("button", {log: false})
//     .click({log: false}) // this should submit the form
//   cy.get("h1", {log: false})
//     .contains("Dashboard", {log: false}) // we should be on the dashboard now
//   cy.url({log: false})
//     .should("match", /dashboard/, {log: false})
//     .then(function(){
//       log.snapshot().end()
//     })
// })
