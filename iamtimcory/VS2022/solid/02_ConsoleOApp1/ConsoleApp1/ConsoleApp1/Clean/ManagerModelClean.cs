using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class ManagerModelClean : IApplicantModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IAccountProcessorClean AccountProcessor { get; set; } = new ManagerAccountProcessorClean();
    }
}
