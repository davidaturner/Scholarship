using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    public class AccountProcessor
    {
        public EmployeeModel CreateEmployee(PersonModel person)
        {
            EmployeeModel employee = new EmployeeModel() { FirstName = person.FirstName, LastName = person.LastName };

/*
 * Change needed if you want to update to processing Managers w/o the breaking nature of subclasses.
 * EmployeeModel employee = new EmployeeModel() { FirstName = person.FirstName, LastName = person.LastName, IsManager = person.PromoteToManager };
 */
// OCP Violation!
// Changing this class changes things for all Employees.

            employee.EmailAddress = $"{person.FirstName.Substring(0, 1) + person.LastName}@ourcompany.com";
            return employee;
        }
    }
}
