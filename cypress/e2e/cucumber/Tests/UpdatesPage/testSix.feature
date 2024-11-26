Feature: Home Page

  Scenario: Does display the 'Updates' page after clicking the 'Update' button
    And I see the 'Updates' button
    When I click on the 'Updates' button
    Then I see the Updates page is displayed
