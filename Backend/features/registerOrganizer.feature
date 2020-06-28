Feature: Register
  Scenario: Register as an Event Organizer
    Given I want to register as an event organizer
    When I type all the details required
    Then I create a new event organizer

