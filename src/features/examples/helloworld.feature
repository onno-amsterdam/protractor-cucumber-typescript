Feature: hello world

    The under Hello World page displays a message to the user.

    @helloworld
    Scenario: open home page
        Given I open the page "helloworld.html"
        Then the page shows header with text "Hello World"
        