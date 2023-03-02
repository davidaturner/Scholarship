using System;
using Employee = EmployeeNamespace.Employee;
using Engineer = EmployeeNamespace.Engineer;
using SoftwareEngineer = EmployeeNamespace.SoftwareEngineer;

namespace handsonl7
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            runPart1a();
            // runPart1b();
            Console.WriteLine("---------------------------------");
            runPart2();

        }

        static void runPart1a()
        {
            // Employee Name: Rupert Scott
            // Salary: 42000
            // Hire Date: 11 / 22 / 12
            Employee emp = new Employee("Rupert Scott", 42000, new DateTime(2012, 11, 22));
            emp.getName();
            emp.getSalary();
            emp.getHireDate();

        }

        static void runPart1b() {

            Engineer eng = new Engineer("Carl Tummi", 100000, new DateTime(2017, 12, 11),
                                    "Carnegie Mellon University");
            eng.getName();
            eng.getSalary();
            eng.getHireDate();
        }

        static void runPart2() {
            // Employee Name: Shea Rovington
            // Salary: Sorry, this employee's salary is private.
            // Hire Date: 03/27/18
            SoftwareEngineer seng = new SoftwareEngineer("Shea Rovington", 60000, new DateTime(2018, 3, 27),
                                            "University of Pittsburgh");
            seng.getName();
            seng.getSalary();
            seng.getHireDate();
        }
    }
}
