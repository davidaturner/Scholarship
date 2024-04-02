// this is created using vite
// https://vitejs.dev/guide/
//
// npm create vite@latest my-app -- vanilla-ts
// cd my-app
// npm install
// create src/app.ts
// add import './app.ts' to main.ts
// npm run dev
// open http://localhost:5173
// 
// to transpile typescript:
// open 2nd terminal window
// npm run build
// you can find js in public/assets

console.log("Hello, World!")
interface Person {
    name: string;
    age: number;
}

const joesantos : Person = {
    name: "Joe Santos",
    age: 29
}
console.log(joesantos)