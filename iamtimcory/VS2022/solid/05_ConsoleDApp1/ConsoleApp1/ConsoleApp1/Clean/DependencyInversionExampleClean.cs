using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public static class DependencyInversionExampleClean
    {
        public static void _Main()
        {
            /* DIP
             * high level modules should not depend on
             * low level modules but instead use abstractions
             * of low details (remove tightly coupled depends)
             */
            Console.WriteLine("Beginning application.\r\n");

            IPersonClean owner = FactoryClean.CreatePerson();
            owner.FirstName = "Tim";
            owner.LastName = "Corey";
            owner.Email = "tcorey@yourcompany.net";
            owner.Phone = "412-555-1212";

            IChoreClean chore = FactoryClean.CreateChore();
            chore.Name = "Eat breakfast";
            chore.Owner = owner;

            chore.PerformHoursOfWork(3);
            chore.PerformHoursOfWork(1.5);
            chore.CompleteChore();

            Console.WriteLine("\r\n\r\nDONE!");
        }

    }
}
