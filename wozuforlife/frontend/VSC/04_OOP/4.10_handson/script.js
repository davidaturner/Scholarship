class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
  getEmployeeDescription() {
    // An example of the end result would be "Donna was hired on 3/22/17 
    // and makes 80000 because she manages the sales staff"
    return this.name.toUpperCase() + " was hired on " +
            this.hireDate + " and makes " +
            this.salary;
  }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription() {
        console.log(this.getEmployeeDescription() + 
                    ((this.descriptionOfJob != undefined)?
                    " because she " + this.descriptionOfJob: ""));
    }

}

class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }

    yearsExperience() {
        console.log(this.getEmployeeDescription() + 
                    ((this.experience != undefined)?
                    " because she has " + this.experience +
                    " years experience":""));
    }
}

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }

    degreeCompleted() {
        console.log(this.getEmployeeDescription() + 
                    ((this.degrees != undefined)?
                      " because she has " + this.degrees +
                        " degrees" : ""                 
                    ))
    }
}

const paulie = new Employee("Paulie Bryant", 8000, "12/07/2010");
console.log(paulie.getEmployeeDescription());
const edwina = new Manager("Edwina Cole", 10000, "24/03/2005", "manages people");
edwina.jobDescription();
const pauleen = new Designer("Pauleen Severed", 10000, "17/11/2017", 12);
pauleen.yearsExperience();
const modie = new SalesAssociate("Modie Bred", 10000, "03/01/2022", 3);
modie.degreeCompleted();