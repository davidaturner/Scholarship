using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp2.Interfaces;
using ConsoleApp2.ApplicantModels;
using ConsoleApp2.CompanyAccountModels;

namespace ConsoleApp2
{
    public class AccountsManagementApplicantsCapture
    {
        // OCP
        // Classes are open for extension.
        // Closed for modification.
        public static void EmployeeCapture()
        {
            Console.WriteLine("Hello World!");

            List<IEmployeeModel> applicants = new List<IEmployeeModel>()
            {
                new EmployeeModel(){ FirstName = "Tim", LastName = "Corey" },
                new ManagerModel(){ FirstName = "Coppola", LastName = "Talent" },
                new ExecutiveModel(){ FirstName = "Boychik", LastName = "Annias" },
            };

            List<IEmployeeModel> employees = new List<IEmployeeModel>();

            foreach (var applicant in applicants)
            {
                employees.Add(applicant.AccountProcessorCreate.Create(applicant));
            }

            foreach (var employee in employees)
            {
                Console.WriteLine($"{employee.FirstName} {employee.LastName} {employee.EmailAddress} Manager : {employee.IsManager} Executive : {employee.IsExecutive}");
            }

            Console.WriteLine("\r\n>> DONE!");
        }
    }
}
