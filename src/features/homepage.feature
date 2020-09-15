Feature: the home page shows five objects

    @homepage-shows-header @homepage
    Scenario: homepage shows header
        Given I open the home page
        Then I see the "header" object on the page
        And the "header" object header shows text "Header Container"

    @homepage-shows-left-menu @homepage
    Scenario: homepage shows menu-left
        Given I open the home page
        Then I see the "menuLeft" object on the page
        And the "menuLeft" object header shows text "Menu Left Container"

    @homepage-shows-area-center @homepage
    Scenario: homepage shows area center
        Given I open the home page
        Then I see the "areaCenter" object on the page
        And the "areaCenter" object header shows text "Area Center Container"

    @homepage-shows-right-menu @homepage
    Scenario: homepage shows menu right
        Given I open the home page
        Then I see the "menuRight" object on the page 
        And the "menuRight" object header shows text "Menu Right Container"
    
    @homepage-shows-footer @homepage
    Scenario: homepage shows footer
        Given I open the home page
        Then I see the "footer" object on the page
        And the "footer" object header shows text "Footer Container"




