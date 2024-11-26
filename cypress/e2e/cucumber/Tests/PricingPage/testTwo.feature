Feature: Pricing Page


Scenario: Check the number of questions in the FAQ section on the 'Pricing' page
    When I click on the 'Pricing' button
    And I see The Pricing Page
    Then I see the FAQ section contains 4 questions
