Feature: feature for testing by example with the scenario outline

    # background is run before each scenario - even when with an outline
    Background: this is before the scenario
        Given I start a test with "TESTING!"

    @scenario-outline # scenario-template is a synonym for outline 
    Scenario Outline: describe a features functionality with scenario outline
        Given I start with the state "<start-state>"
        When I click button "<button>"
        Then I see the color "<color>"

        Examples:
            | start-state | button       | color |
            | france      | big-button   | blue  |
            | spain       | small-button | red   |
            | belgium     | tiny-button  | black |
