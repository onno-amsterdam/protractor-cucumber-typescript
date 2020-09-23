# loop through elements and check attributes (done)
# loop through elements and check attributes each different
# loop through elements and assert the text
# loop through elements and check if contains an element
Feature: menu-items in the left menu

    The left menu shows a list of items. This feature shows the different ways how to loop through the menu-items and identify the different kinds of items.

    # loop through elements and check attributes
    @loop-through-elements-and-attributes
    Scenario: loop through element and check attributes
        Given I open the home page
        Then each menu item has a "class" attribute "menu-item"

    # loop through elements and assert the text
    @loop-through-elements-and-assert-the-text
    Scenario: loop through elements and assert the text
        Given I open the home page
        Then I see the menu-items in the left menu with text:
            | header | text         |
            | Item 1 | Content of 1 |
            | Item 2 | Content of 2 |
            | Item 3 | Content of 3 |
            | Item 4 | Content of 4 |
            | Item 5 | Content of 5 |

