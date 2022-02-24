using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Original
{
    public class EmployeeModel
    {
        public string FirstName { get; set; }
        public string LastName  { get; set; }

        public string FullName { get; set; }

        public string EmailAddress { get; set; }

        public EmployeeType EmployeeType { get; set; }
    }
}
