import { source, stripIndent } from 'common-tags'

export default {
  Actions: {
    '.type() - type into a DOM element': {
      description: stripIndent`
        ## [.type()](https://on.cypress.io/type)
        To type into a DOM element, use the [\`.type()\`](https://on.cypress.io/type) command.
      `,
      test: source`
        // https://on.cypress.io/type
        cy.get('.action-email')
          .type('fake@email.com').should('have.value', 'fake@email.com')

          // .type() with special character sequences
          .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          .type('{del}{selectall}{backspace}')

          // .type() with key modifiers
          .type('{alt}{option}') //these are equivalent
          .type('{ctrl}{control}') //these are equivalent
          .type('{meta}{command}{cmd}') //these are equivalent
          .type('{shift}')

          // Delay each keypress by 0.1 sec
          .type('slow.typing@email.com', { delay: 100 })
          .should('have.value', 'slow.typing@email.com')

        cy.get('.action-disabled')
          // Ignore error checking prior to type
          // like whether the input is visible or disabled
          .type('disabled error checking', { force: true })
          .should('have.value', 'disabled error checking')
      `,
      html: source`
        <form>
          <div class="form-group">
            <label for="email1">Email address</label>
            <input type="email" class="form-control action-email" id="email1" placeholder="Email">
          </div>
          <div class="form-group">
            <label>Disabled Textarea</label>
            <textarea class="form-control action-disabled" disabled="disabled"></textarea>
          </div>
        </form>
      `,
    },
  },
}
