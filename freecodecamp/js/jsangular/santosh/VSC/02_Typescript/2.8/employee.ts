export interface User {
    name: string;
    age?: number;
    id: number;
}

export interface Login {
    login(): User;
}

export interface Employee extends User {
    empid: number;
    email?: string;
}

export interface SalariedEmployee extends Employee, Login {
    salary: number;
}