Feature: use a static world class to support global variables

   Feature Description: a world class is used to set global variables to be used outside of the step definitions, page-objects and helpers. This class can handle two variables: a test-object name and a boolean if the test-object is created. 

   @test-object-world-first-scenario
   Scenario: set global variables and use them in different files
      Given I set the global name to "newName001"
      Then I read the global name
      