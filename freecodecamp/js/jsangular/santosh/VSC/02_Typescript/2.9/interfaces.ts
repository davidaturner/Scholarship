"use strict";

// Interface
// Describes the shape of an object.
// One or more can be merged (like css styling)
// Can be extended by type and type alias
// Can extend classes
// Can be implemented by classes
export interface User {
    name: string;
    age: number;
    id: number;
    email: string;
}

export interface SalariedUser extends User {
    salary: number;
}

export interface Address {
    street: string;
    city: string;
    zip: string;
    email: string;
}

export interface Login {
    login(): User;
}


// Type (alias)
// Defines a data type
// Can create union and intersection types.
type TUser = {
    name: string;
    age: number;
    id: number;
    email: string;
}

const joe: TUser = {
  name: "Joe Santos",
  age: 26,
  id: 1,
  email: "johnsmith@email.com"
}

// Look at JS code equivalent.
// There appears no transpile equivalents for interface and type.
// Perhaps useful only for readability.
// When you need transpiled type, use classes.
