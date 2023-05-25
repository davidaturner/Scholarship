function say() {

    try {
        console.log('Start of try block'); // #1 This line runs first

        // No errors occurred so you move on to number #2

        console.log('End of try block'); // #2 This line runs next
    } catch (err) {
        console.log('Catch is ignored because there are no errors'); // #3 This is line ignored due to there being no errors.
    }

    console.log('...Then the execution continues'); // #4 This alert is executed
}
say();

const sayError = () => {

    try {
        console.log('Start of try block'); // #1 This line executes

        randomVariable; // error, variable is not defined!

        console.log('End of try block'); // #2 This line is never reached
    } catch (err) {
        console.log('Error has occurred!'); // #3 This is line executed since an error has occurred.
    }

    console.log('...Then the execution continues'); // #4 Finally, this is executed.
}

sayError();

