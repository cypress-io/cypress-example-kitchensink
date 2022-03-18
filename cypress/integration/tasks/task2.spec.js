/// <reference types="cypress" />

// Second task - mocking and fixing

// You're going to test this site http://localhost:8080/todo

// Please write a test:
// 1. prepare the initial list of tasks (tip: use the mock prepared)
// 2. count the list of elements in All tab
// 3. count the list of elements in Active tab
// 4. count the list of elements in Completed tab
// 5. verify if the number from 2nd step equals to the sum of the other 2 numbers

describe('Second cypress task', () => {
  const row = 'li'
  const list = 'ul'
  const toDoCheckbox = 'input[type="checkbox"]'
  const completedTasks = 'a[href="#/completed"]'
  const activeTasks = 'a[href="#/active"]'

  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit('/todo')
  })

  it('assert all elements are visible in either of the two tabs', () => {
    cy.get('section').find('input[data-test="new-todo"]').type('Clean Garage {enter}')
    cy.get('section').find('input[data-test="new-todo"]').type('Open Parking space {enter}')

    cy.get(list).find(toDoCheckbox).last().check()
    cy.get(list).find(toDoCheckbox).first().check()

    const allList = []
    const activeList = []
    const completedList = []

    cy.get(list).first().find(row).each((task) => {
      allList.push(task.length)
    })

    cy.get(activeTasks).click()
    cy.get(list).first().find(row).each((task) => {
      activeList.push(task.length)
    })

    cy.get(completedTasks).click()
    cy.get(list).first().find(row).each((task) => {
      completedList.push(task.length)
    })

    cy.wrap(allList).then(() => {
      expect(allList.length).to.be.equal(activeList.length + completedList.length)
    })
  })
})
