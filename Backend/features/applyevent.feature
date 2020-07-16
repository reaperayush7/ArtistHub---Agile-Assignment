Feature: Apply for an event
  Scenario: Apply for an even as a artist
    Given I want to apply for an event as a artist
    When I provide my details
    Then I apply for that event
