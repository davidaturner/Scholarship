using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp2.Interfaces;
using ConsoleApp2.ApplicantModels;

namespace ConsoleApp2.CompanyAccountModels
{
    public class ManagerAccountModelCreate : IEmployeeAccountModelCreate
    {
        public IEmployeeModel Create(IApplicantModel applicant)
        {
            IEmployeeModel employee = new ManagerModel()
            {
                FirstName = applicant.FirstName,
                LastName = applicant.LastName
            };

            //email address is determined by subclass
            employee.EmailAddress = $"{employee.LastName}, {employee.FirstName}@ourcompany.com";

            return employee;
        }
    }
}
