using System;
using System.Collections.Generic;

namespace Original
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // OCP
            // Classes are open for extension.
            // Closed for modification.

            Console.WriteLine("Here are your new employees!\r\n");

            List<EmployeeModel> applicants = new List<EmployeeModel>()
            {
                new EmployeeModel(){ FirstName = "Tim", LastName = "Corey" },
                new EmployeeModel(){ FirstName = "Coppola", LastName = "Talent" },
                new EmployeeModel(){ FirstName = "Boychik", LastName = "Annias" },
            };

            List<EmployeeModel> newEmployees = CreateAccountsForApplicants(applicants);

            DisplayAccounts(newEmployees);

            Console.WriteLine("\r\n>> DONE!");
        }

        public static List<EmployeeModel> CreateAccountsForApplicants(List<EmployeeModel>applicants)
        {
            List<EmployeeModel>employees = new List<EmployeeModel>();
            foreach (var applicant in applicants)
            {
                EmployeeModel employee = CreateAccount(applicant);
                employees.Add(employee);

            }
            return employees;
        }

        public static EmployeeModel CreateAccount(EmployeeModel applicant)
        {
            EmployeeModel employee = new EmployeeModel()
            {
                FirstName = applicant.FirstName,
                LastName = applicant.LastName
            };

            employee.FullName = CreateFullName(applicant);
            employee.EmailAddress = CreateEmailAddress(applicant);

            employee.EmployeeType = EmployeeType.Employee;

            return employee;
        }

        public static string CreateFullName(EmployeeModel applicant)
        {
            return applicant.FirstName + " " + applicant.LastName;
        }

        public static string CreateEmailAddress(EmployeeModel applicant)
        {
            return  applicant.FirstName.Substring(0, 1) + applicant.LastName +
                        "@ourcompany.com";
        }
        public static void DisplayAccounts(List<EmployeeModel> employees)
        {
            foreach(var employee in employees)
            {
                Console.WriteLine($"First Name:  {employee.FirstName}");
                Console.WriteLine($"Last Name:  {employee.LastName}");
                Console.WriteLine($"Full Name:  {employee.FullName}");
                Console.WriteLine($"Email Address:  {employee.EmailAddress}");
                Console.WriteLine($"Employee Type: {employee.EmployeeType}");
                Console.WriteLine();
            }
        }
    }
}
