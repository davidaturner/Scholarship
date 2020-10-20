// Like Java, interface has only public
// members.
export interface NameInterface {
  firstname : string;
  lastname : string;
  age? : number;
  fullname() : string;
  // fullnameAge() : string;
};

export const missingcity : string = "(Missing City)";
export const missingstate : string = "(Missing State)";

export class User implements NameInterface {
  constructor(
    public firstname: string, 
    public lastname: string,
    public age?: number,
    private city?: string,
    private state?: string
  ) 
  {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age == undefined? 0 : age;
    this.city = city == undefined? missingcity : city;
    this.state = state == undefined? missingstate : state;
  }

  fullname() : string {
    return (this.age == 0)? 
                        this.firstname + " " + this.lastname:
                        this.fullnameAge();
  }

  private fullnameAge() : string {
    return this.firstname + " " + this.lastname + ", " + this.age;
  }

  getCity() {
    return this.city;
  }
  setCity(city: string) {
    this.city = city;
  }

  getState() {
    return this.state;
  }
  setState(state: string) {
    this.state = state;
  }

  fullAddress() : string {
    return this.fullnameAge() + " of " + this.city + ", " + this.state;
  }
};
