Feature: Home Page

  Scenario: Verify background blur after clicking 'Get the app' button
    And I see the 'Get the app' button
    When I click on the 'Get the app' button
    Then I see the background is blurred
