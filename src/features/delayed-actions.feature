Feature: delayed actions

    This feature allows the user to trigger delayed actions on the homepage. In the delayed actions dropdown in the right menu three actions are available that will be executed after 2 seconds.

    @remove-element-delayed
    Scenario: remove element from the DOM two seconds after click
        Given I open the home page
        When I select "removeElementOption" from the delayed actions dropdown
        Then the element is removed from the DOM

    @add-element-delayed
    Scenario: add element to the DOM two seconds after click
        Given I open the home page
        When I select "addElementOption" from the delayed actions dropdown
        Then the element is added to the DOM

    @show-alert-delayed
    Scenario: show browser alert two seconds after the click
        Given I open the home page
        When I select "showAlertOption" from the delayed actions dropdown
        Then the alert is shown in the browser
        And the alert reads text "This is an alert!"