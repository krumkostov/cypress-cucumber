Feature: Home Page

  Scenario: Does display 'get the app' and 'watch video' one above the other on mobile
    Given the Framer site is loaded on mobile
    Then I see the 'get the app' and 'watch video' buttons are displayed one above the other on mobile
