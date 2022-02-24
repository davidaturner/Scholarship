
export interface EmployeeInterface {
  name: string;
  age: number;
  // city?: string; not public cannot be part of interface
  state?: string;
  welcome() : void;
  signedoff() : void; 
}