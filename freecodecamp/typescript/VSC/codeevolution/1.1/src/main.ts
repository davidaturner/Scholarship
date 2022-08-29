export{}
/* 
    What & why Typescript

    Open source programming from Microsoft.
    Typed superset of javascript
    Compiles/transpiles into plain javascript
    (warning: not always type accurate)

    Errors are found before runtime. More maintainable code.
    IDE support (finding errors automatically)
    Can be used in Angular and now, React.
    Microsoft and community supported.

    Once compiled, you can run with 'node ./build/main.js'

    Finally, in order to avoid block scoped errors when you visit the js file,
    put in the ts file - 'export{}' so that the js file is no longer a script,
    but a module.
*/
let message = "Hello, Watched World!"
console.log(message)