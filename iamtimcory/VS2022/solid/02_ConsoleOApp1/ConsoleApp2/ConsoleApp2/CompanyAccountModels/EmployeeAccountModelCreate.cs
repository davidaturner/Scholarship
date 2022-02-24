using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp2.Interfaces;
using ConsoleApp2.ApplicantModels;

namespace ConsoleApp2.CompanyAccountModels
{
    public class EmployeeAccountModelCreate : IEmployeeAccountModelCreate
    {
        public IEmployeeModel Create(IApplicantModel applicant)
        {
            IEmployeeModel employee = new EmployeeModel()
            {
                FirstName = applicant.FirstName,
                LastName = applicant.LastName
            };

            employee.EmailAddress = $"{employee.FirstName.Substring(0, 1) + employee.LastName}@ourcompany.com";
            return employee;
        }
    }
}
