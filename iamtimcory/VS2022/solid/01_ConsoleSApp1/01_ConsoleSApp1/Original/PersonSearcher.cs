using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ConsoleSApp1.AOk
{
    public class PersonSearcher
    {
        public bool Search(Person person)
        {
            bool personFound = false;
            Console.WriteLine("\r\nBeginning search for {0}...", person.FullName());
            if (personFound == false)
            {
                Console.WriteLine("Person Not Found!");
            }
            else
            {
                Console.WriteLine("Person Found!");
            }

            return personFound;
        }

    }
}
