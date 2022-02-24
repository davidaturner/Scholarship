using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    public static class DependencyInversionExample
    {
        public static void _Main()
        {
            /* DIP
             * high level modules should not depend on
             * low level modules but instead use abstractions
             * of low details
             */
            Console.WriteLine("Beginning application.\r\n");
            Person owner = new Person()
            {
                FirstName = "Tim",
                LastName = "Corey",
                Email = "tcorey@yourcompany.net",
                Phone = "412-555-1212"
            };

            Chore chore = new Chore
            {
                Name = "Eat breakfast",
                Owner = owner
            };

            chore.PerformHoursOfWork(3);
            chore.PerformHoursOfWork(1.5);
            chore.CompleteChore();

            Console.WriteLine("\r\n\r\nDONE!");
        }

    }
}
