/*
    Measuring efficiency of the Data Structure with Big O notation.

    Report worse-case scenario response on the following tasks:
    Accessing elements
    Searching elements
    Inserting elements
    Deleting elements

    O 2 - Means O of 2. For it takes 2 operations to complete.
    O 5 = Means O of 5. For it takes 5 operations to complete.

    O 1 - No matter the size of the data set, the task is finished in single step.
    (Constant or instaneous time)

    O log n - Rate of operations to complete decreases as data set is increase linear.

    O n - For every element you operate on the number instructions increase linearly.

    ** End of efficient data sources.

    Do not use Time Complexity as the Sole reason to use a particular Data Structure.
*/

function last(a, b) {

    var store = Array()
    store[0] = a        // two inserts - O 1 and O 1 = O 2
    store[1] = b
    return store[0]     // accessing value - O 1
}

console.log(10 + " " + 15)
console.log(last(10, 15))                    