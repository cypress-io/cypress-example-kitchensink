Feature: Landing Page Navigation
    Scenario: Displaying the landing page
        Given the user navigates to the "Cypress.io: Kitchen Sink" homepage
        Then the landing page is displayed
        And the page title is "Cypress.io: Kitchen Sink"
        And the navigation bar is visible at the top of the page
        And the introduction banner with a description of Cypress.io is visible
Feature: Navigation Bar Interaction
    Background: Given the user is on the landing page
    Scenario: Navigating the Commands link
        When the user clicks on the "Commands" link in the navigation bar
        Then the dropdown menu is displayed
        And the dropdown menu contains links to "Querying", "Traversal", "Actions", and other categories
    Scenario: Navigating the Utilities link
        When the user clicks on the "Utilities" link in the navigation bar
        Then the Utilities page is displayed
    Scenario: Navigating the Cypress API link
        When the user clicks on the "Cypress API" link in the navigation bar
        Then the Cypress API page is displayed

Feature: Landing Page Content
    Background: Given the user is on the landing page
        Scenario: Viewing the Introduction banner
            Then the introduction banner is displayed with a headline "Kitchen Sink"
            And a subheadline describes the purpose of the website
            And links to "https://www.cypress.io" and "https://docs.cypress.io" are visible and clickable
        Scenario: Exploring Commands section
            Given the user is viewing the Commands section
            Then a list of command categories is displayed, including "Querying", "Actions", "Assertions”, and others
            And a list of commands related to the category is displayed
            When the user clicks on a command category
            Then that command category’s page is displayed

Feature: External Links and Resources
    Background: Given the user is on the landing page
        Scenario: Accessing the GitHub repository
            When the user clicks on the "GitHub" link in the navigation bar
            Then the user is redirected to the "cypress-io/cypress-example-kitchensink" GitHub repository
        Scenario: Accessing the Cypress homepage
            When the user clicks on the ”cypress.io" link in the navigation bar
            Then the user is redirected to the "https://www.cypress.io/" website