using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class PersonModelClean : IApplicantModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        // OCP change.
        // Extract interface. Then add the interfaces of classes that need to use this.
        public IAccountProcessorClean AccountProcessor { get; set; } = new AccountProcessorClean();

        //Say you need to flag Person to become a 
        // manager. Adding this change maybe OK.
        // It doesn't BREAK anything
        // through it still DOES violates OCP.

        //public bool PromoteToManager { get; set; }
    }
}
