Feature: Register
  Scenario: Register as artist Sajak
    Given I want to register as an artist
    When I type all the user details
    Then I create a new user

