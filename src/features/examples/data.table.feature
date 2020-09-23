Feature: data table in scenario step

    Description: in a scenario step multiple data input can be used. A data table is passed to the step definition.

    @data-tables
    Scenario: use data tables in step
        # hashes hashes the dataTable into an array of objects with headers
        Given I use a step with following data with headers hashes:
            | header-one            | header-two            | header-three          | header-four           |
            | data-row-one-column-1 | data-row-one-column-2 | data-row-one-column-3 | data-row-one-column-4 |
            | data-row-two-column-1 | data-row-two-column-2 | data-row-two-column-3 | data-row-two-column-4 |
        # rows hashes the dataTable into an array of arrays without headers
        Given I use a step with data with headers rows:
            | header-one            | header-two            | header-three          | header-four           |
            | data-row-one-column-1 | data-row-one-column-2 | data-row-one-column-3 | data-row-one-column-4 |
            | data-row-two-column-1 | data-row-two-column-2 | data-row-two-column-3 | data-row-two-column-4 |
        Given I use a step with data without headers raw:
            | header-one            | header-two            | header-three          | header-four           |
            | data-row-one-column-1 | data-row-one-column-2 | data-row-one-column-3 | data-row-one-column-4 |
            | data-row-two-column-1 | data-row-two-column-2 | data-row-two-column-3 | data-row-two-column-4 |
        Given I use a step with data without headers rowsData:
            | header-one            | header-two            |
            | data-row-one-column-1 | data-row-one-column-2 |
            | data-row-two-column-1 | data-row-two-column-2 |