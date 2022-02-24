using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp2.Interfaces;
using ConsoleApp2.ApplicantModels;

namespace ConsoleApp2.CompanyAccountModels
{
    public class ExecutiveAccountModelCreate : IEmployeeAccountModelCreate
    {
        public IEmployeeModel Create(IApplicantModel applicant)
        {
            IEmployeeModel employee = new ExecutiveModel()
            {
                FirstName = applicant.FirstName,
                LastName = applicant.LastName
            };

            // subclass determines email address
            employee.EmailAddress = $"Sir_{employee.FirstName}_{employee.LastName}@ourcompany.com";
            return employee;
        }
    }
}
