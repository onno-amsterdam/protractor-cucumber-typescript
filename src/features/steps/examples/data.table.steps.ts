import { Given } from "cucumber";

Given('I use a step with following data with headers hashes:', function (dataTable) { 
    // hashes: returns an array of objects where each row is converted to an object (column header is the key)
    const dataHash = dataTable.hashes();

    //  The datatable looks like this after hashing:
    //  [
    //     {
    //       'header-one': 'data-row-one-column-1',
    //       'header-two': 'data-row-one-column-2',
    //       'header-three': 'data-row-one-column-3',
    //       'header-four': 'data-row-one-column-4'
    //     },
    //     {
    //       'header-one': 'data-row-two-column-1',
    //       'header-two': 'data-row-two-column-2',
    //       'header-three': 'data-row-two-column-3',
    //       'header-four': 'data-row-two-column-4'
    //     }
    //   ]

    // forEach loop through the array to handle each object that represents a row;
    dataHash.forEach((element: any) => {
        // loop through the key-value pairs to use the values
        for (const index in element) {
            console.log(index);
            console.log(element[index]);
        }
    });

    // another way of looping through a table is as such
    // this can prevent the test running to the loop to fast
    for (const index of Object.keys(dataHash)) {
        console.log(index);
        console.log((dataHash[index]));
    }
    
    return true;
});

Given('I use a step with data with headers rows:', function (dataTable) { 
    const dataRows = dataTable.rows();
    // with column headers
    // rows: returns the table as a 2-D array, without the first row
    // each row is an object in the array
    
    // The datatable looks like this after rows:
    // [
    //     [
    //       'data-row-one-column-1',
    //       'data-row-one-column-2',
    //       'data-row-one-column-3',
    //       'data-row-one-column-4'
    //     ],
    //     [
    //       'data-row-two-column-1',
    //       'data-row-two-column-2',
    //       'data-row-two-column-3',
    //       'data-row-two-column-4'
    //     ]
    // ]

    console.log(dataRows);
    console.log(dataRows[0]);
    console.log(dataRows[1]);
    console.log(dataRows[1][1]);

    return true;
});

Given('I use a step with data without headers raw:', function (dataTable) { 
    // without column headers;
    // raw: returns the table as a 2-D array - headers is the first row;
    // an array of arrays where the where the array are the headers;
    const rawData = dataTable.raw();
    // The table looks like this after raw;
    // [
    //     [ 'header-one', 'header-two', 'header-three', 'header-four' ],
    //     [
    //       'data-row-one-column-1',
    //       'data-row-one-column-2',
    //       'data-row-one-column-3',
    //       'data-row-one-column-4'
    //     ],
    //     [
    //       'data-row-two-column-1',
    //       'data-row-two-column-2',
    //       'data-row-two-column-3',
    //       'data-row-two-column-4'
    //     ]
    //   ]
    console.log(rawData);

    return true;
});

Given('I use a step with data without headers rowsData:', function (dataTable) { 
    // without column headers
    // rowsHash: returns an object where each row corresponds to an entry (first column is the key, second column is the value)
    const rowsData = dataTable.rowsHash();
    console.log(rowsData);

    // The table looks like this after raw;
    // {
    //     'header-one': 'header-two',
    //     'data-row-one-column-1': 'data-row-one-column-2',
    //     'data-row-two-column-1': 'data-row-two-column-2'
    // }

    return true;
});