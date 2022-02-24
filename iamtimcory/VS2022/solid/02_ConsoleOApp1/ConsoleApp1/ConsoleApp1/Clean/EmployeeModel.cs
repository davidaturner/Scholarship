using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    //OCP
    //
    // Is generally not application during development.
    // Generally, applicable only when classes go to Production.
    // Contemplating new classes.
    public class EmployeeModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        //If you then Need to determine if manager.
        //This change does not BREAK anything.
        //But it DOES represent an OCP violation.

        public bool IsManager{ get; set; }
    }
}
