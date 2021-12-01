using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ConsoleSApp1.AOk
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string FullName()
        {
            return FullName(FirstName, LastName);
        }

        public static string FullName(string firstname, string lastname)
        {
            return firstname + " " + lastname;
        }

    }
}
