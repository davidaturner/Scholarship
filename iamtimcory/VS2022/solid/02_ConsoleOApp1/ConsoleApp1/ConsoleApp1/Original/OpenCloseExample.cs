using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ConsoleApp1.Original
{
    public static class OpenCloseExample
    {
        public static void EmployeeCapture()
        {

            List<PersonModel> applicants = new List<PersonModel>()
            {
                new PersonModel(){ FirstName = "Tim", LastName = "Corey" },
                new PersonModel(){ FirstName = "Coppola", LastName = "Talent" },
                new PersonModel(){ FirstName = "Boychik", LastName = "Annias" },
            };
            /* If later added bool to promote to managers. this would change
            List<PersonModel> candidates = new List<PersonModel>()
            {
                new PersonModel(){ FirstName = "Tim", LastName = "Corey", PromoteToManager = true },
                new PersonModel(){ FirstName = "Coppola", LastName = "Talent", PromoteToManager = false },
                new PersonModel(){ FirstName = "Boychik", LastName = "Annias", PromoteToManager = false },
            };
            */

            List<EmployeeModel> employees = new List<EmployeeModel>();
            AccountProcessor accountProcessor = new AccountProcessor();

            foreach(PersonModel applicant in applicants)
            {
//                employees.Add( accountProcessor.CreateEmployee(applicant));
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
