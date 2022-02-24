using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ConsoleApp1.Clean
{
    public static class OpenCloseExample
    {
        public static void EmployeeCapture()
        {

            List<IApplicantModel> applicants = new List<IApplicantModel>()
 //           List<PersonModelClean> applicants = new List<PersonModelClean>()
            {
                new PersonModelClean(){ FirstName = "Tim", LastName = "Corey" },
                new PersonModelClean(){ FirstName = "Coppola", LastName = "Talent" },
                new PersonModelClean(){ FirstName = "Boychik", LastName = "Annias" },
            };

            List<EmployeeModel> employees = new List<EmployeeModel>();
//            AccountProcessor accountProcessor = new AccountProcessor();

            foreach(PersonModelClean applicant in applicants)
            {
                employees.Add( applicant.AccountProcessor.CreateEmployee(applicant));
            }

            foreach (EmployeeModel employee in employees)
            {
                Console.WriteLine($"{employee.FirstName} {employee.LastName} {employee.EmailAddress}");
            }

            /* If later need to display staff/manager mix.
            foreach (EmployeeModel employee in employees)
            {
                Console.WriteLine($"{employee.FirstName} {employee.LastName} {employee.EmailAddress} Manager : {employee.IsManager}");
            }
            */
        }
    }
}
