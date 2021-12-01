using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    public static class Employer
    {
        public static List<IDisplayable> CreateEmployees(List<IDisplayable>persons)
        {
            List<IDisplayable> employees = new List<IDisplayable>();
            foreach (IDisplayable person in persons)
            {
                employees.Add(CreateEmployee(person));
            }
            return employees;
        }

        public static IDisplayable CreateEmployee(IDisplayable person)
        {
            Employee emp = new Employee();
            string firstname = ((Person)person).FirstName;
            string lastname = ((Person)person).LastName;

            emp.FirstName = firstname;
            emp.LastName = lastname;
            emp.EmailAddress = $"{firstname.Substring(0, 1)}{lastname}@yourcorp.com";

            return emp;
        }
    }
}
