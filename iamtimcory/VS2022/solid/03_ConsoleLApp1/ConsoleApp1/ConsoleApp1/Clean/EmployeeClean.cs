using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class EmployeeClean : EmployeeCleanBase, IManaged
    {
        public IEmployeeClean Manager { get; set; }

        public virtual void AssignManager(IEmployeeClean manager)
        {
            // Stimulating other tasks.
            // Otherwise this would just be a Set.
            Manager = manager;
        }

        /*
         * OCP violation if when creating the class Janitor
         * you must override the following (Since Janitor has
         * keys for multiple wards.) You then must alter this
         * parent class so that the method is virtual.
        public string GetSecurityKey(String ward)
        {
            return (ward == "frontdoor") ? "key to frontdoor" : null;
        }
        */
    }
}
