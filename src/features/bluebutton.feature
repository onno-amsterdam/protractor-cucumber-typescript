Feature: blue button

    This feature describes the functionality and locations of the blue button on the home page.

    @blue-button-in-menu-items @homepage
    Scenario Outline: blue button is located in every menu item
        Given I open the home page
        When I click the blue-button in menu-item "<menu-item-header>"
        Then the alert is shown in the browser
        And the alert reads text "<alert-text>"
        Then I close the alert

        Examples:
            | menu-item-header | alert-text     |
            | Item 1           | In menu-item 1 |
            | Item 2           | In menu-item 2 |
            | Item 3           | In menu-item 3 |
            | Item 4           | In menu-item 4 |
            | Item 5           | In menu-item 5 |

    @blue-button-in-footer @homepage
    Scenario: blue button is located in the footer
        Given I open the home page
        When I click the blue-button in the the footer
        Then the alert is shown in the browser
        And the alert reads text "In footerContainer"
        Then I close the alert 
