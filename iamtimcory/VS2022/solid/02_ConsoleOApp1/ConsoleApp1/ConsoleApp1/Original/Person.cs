using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    public class Person : IDisplayable
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string FullName() {
            return FirstName + " " + LastName;
        }
        public void Display()
        {
            Console.WriteLine("Person: {0}", FullName());
        }
    }
}
