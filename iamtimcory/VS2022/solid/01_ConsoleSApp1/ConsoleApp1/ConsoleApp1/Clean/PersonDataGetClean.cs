using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1.Clean
{
    public static class PersonDataGetClean
    {
        public static string FullName(Person person)
        {
            return person.FirstName + " " + person.LastName;
        }

        public static string EmailAddress(Person person)
        {
            return person.FirstName.Substring(0, 1) + person.LastName + "@yourcompany.com";
        }
    }
}
