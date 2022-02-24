import { EmployeeInterface } from './interfaces/EmployeeInterface.js';

export class Employee implements EmployeeInterface {

  constructor(
    public name: string, 
    public age:  number,
    private city?: string, 
    public state?: string) 
    {
      this.name = name;
      this.age = age;
      this.city = (city == undefined)? "(Missing City)" : city;
      this.state = (state == undefined)? "(Missing State)" : state;
      this.hellowho();
    }

  welcome() {
    console.log(`Welcome, ${this.name}! You are from ${this.city}, ${this.state} and you are ${this.age} years old.`)
  }

  signedoff() {
    console.log(`Goodbye, ${this.name}.`);
  }

  private hellowho() {
    console.log(`Hello. May I help you, ${this.name}?`)
  }

  get Name() {
    return this.name;
  }

  set Name(value:string) {
    this.name = value;
  }

  get Age() : number | undefined {
    return (this.age == undefined)? 0 : this.age;
  }

  set Age(value:number | undefined) {
    this.age = (value == undefined)? 0 : value;
  }

  get State() : string | undefined {
    return (this.state == undefined)? "(Missing State)" : this.state;
  }

  set State(value:string | undefined) {
    this.state = (value == undefined)? "(Missing State)" : value;
  }
}