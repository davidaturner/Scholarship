using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class ManagerAccountProcessorClean : AccountProcessorCleanBase
    {
        public override EmployeeModel CreateEmployee(IApplicantModel person)
        {
            return base.CreateEmployee(person);
        }
    }
}
