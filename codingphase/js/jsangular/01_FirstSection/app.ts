// Simple procedure.
// 1. tsc --init. 
// 2. create app.ts 
// 3. tsc app.ts
// 4. Add export {} to ts. Else you get an error reuse variable.
const username = 'Joe';
let sport = "Basketball";
sport = "Baseball";