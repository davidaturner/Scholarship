using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp2.Interfaces;
using ConsoleApp2.CompanyAccountModels;

namespace ConsoleApp2.ApplicantModels
{
    public class ManagerModel : IEmployeeModel
    {
        public List<IApplicantModel> Applicants { get; set; }
        public bool IsManager { get; set; } = true;
        public bool IsExecutive { get; set; } = false;
        public IEmployeeAccountModelCreate AccountProcessorCreate { get; set; }
                = new ManagerAccountModelCreate();

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string EmailAddress { get; set; }
    }
}
