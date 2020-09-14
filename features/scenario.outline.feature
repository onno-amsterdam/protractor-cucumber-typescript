Feature: feature for testing by example with the scenario outline

    Scenario Outline allows a scenario and it's steps to be written out ones and be executed with multiple input.
    Each of the lines in the examples table is executed as a new scenario.

    # background is run before each scenario - even with an outline
    Background: this is before the scenario
        Given I start a test with "TESTING!"

    # scenario-template is a synonym for outline 
    @scenario-outline
    Scenario Outline: describe a features functionality with scenario outline
        Given I start with the state "<start-state>"
        When I click button "<button>"
        Then I see the color "<color>"

        Examples:
            | start-state | button       | color |
            | france      | big-button   | blue  |
            | spain       | small-button | red   |
            | belgium     | tiny-button  | black |
