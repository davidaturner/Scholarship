using System;

namespace EmployeeNamespace
{
    class Employee
    {
        public string Name { get; set; }
        public int Salary { get; set; }
        public DateTime HireDate { get; set; }
        virtual public void getName()
        {
            Console.WriteLine(string.Format("Employee Name: {0}", Name));
        }

        virtual public void getSalary()
        {
            Console.WriteLine(string.Format("Salary: {0}", Salary));
        }

        virtual public void getHireDate()
        {
            Console.WriteLine(string.Format("Hire Date: {0}", HireDate.ToString()));
        }

        public Employee() { }
        public Employee(string name, int salary, DateTime hireDate)
        {
            Name = name;
            Salary = salary;
            HireDate = hireDate;
        }
    }

    class Engineer : Employee {

        private string schoolAttended;
        public string SchoolAttended {

            get { return schoolAttended; }
            set { this.schoolAttended = value; }
        }

        public Engineer(string name, int salary, DateTime hireDate, string schoolAttended): base(name, salary, hireDate) {
            this.schoolAttended = schoolAttended;
        }
    }

    class SoftwareEngineer : Engineer {

        public SoftwareEngineer(string name, int salary, DateTime hireDate, string schoolAttended) : base(name, salary, hireDate, schoolAttended) {    
        }

        override public void getSalary() {
            Console.WriteLine("Salary: Sorry, this employee's salary is private.");
        }
    }
    // class Employee
    // {
    //     private string name;
    //     public string Name
    //     {

    //         get { return name; }
    //         set { this.name = value; }
    //     }

    //     private int salary;
    //     public int Salary
    //     {
    //         get { return salary; }
    //         set { this.salary = value; }
    //     }

    //     private DateTime hireDate;
    //     public DateTime HireDate
    //     {
    //         get { return hireDate; }
    //         set { this.hireDate = value; }
    //     }

    //     virtual public void getName()
    //     {
    //         Console.WriteLine(string.Format("Employee Name: {0}", Name));
    //     }

    //     virtual public void getSalary()
    //     {
    //         Console.WriteLine(string.Format("Salary: {0}", Salary));
    //     }

    //     virtual public void getHireDate()
    //     {
    //         Console.WriteLine(string.Format("Hire Date: {0}", HireDate.ToString()));
    //     }

    //     public Employee() { }
    //     public Employee(string name, int salary, DateTime hireDate)
    //     {
    //         this.name = name;
    //         this.salary = salary;
    //         this.hireDate = hireDate;
    //     }
    // }
}