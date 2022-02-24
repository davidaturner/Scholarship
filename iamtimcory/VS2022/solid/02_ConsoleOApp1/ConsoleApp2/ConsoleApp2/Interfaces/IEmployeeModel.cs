using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2.Interfaces
{
    public interface IEmployeeModel : IApplicantModel
    {
        public string EmailAddress { get; set; }

        public bool IsManager { get; set; }

        public bool IsExecutive { get; set; }

        public IEmployeeAccountModelCreate AccountProcessorCreate { get; set; }
    }
}
