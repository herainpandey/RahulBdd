
@EndtoEndTest
Feature: Verifying radio button selection and autosuggestion selection


  Background:
    Given  User launch website "https://rahulshettyacademy.com/AutomationPractice/"

  @regression
  Scenario: User selects 2nd radio button
    And    User clicks on "2"nd radio button
    Then   radio button should be clicked

  @regression
  Scenario: User selects India from Suggession dropdown
    When   User types "Ind" in Suggestion box
    Then   User will see list of countries in Suggestion related to Ind
    And    User clicks on "India"

  @regression @smoke1
  Scenario Outline: User checking amount as per city
    And   Navigate to table "Web Table Fixed header"
    Then   fetch amount for "<city>" and print

    Examples:
    |city   |
    |Kolkata|
    |Mumbai |
    |Delhi  |
