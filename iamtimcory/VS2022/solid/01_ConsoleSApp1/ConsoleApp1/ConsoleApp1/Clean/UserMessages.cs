using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1.Clean
{
    internal class UserMessages
    {
        public static void AnnounceNewUser(Person person)
        {
            AnnounceNewUser(PersonDataGetClean.FullName(person), PersonDataGetClean.EmailAddress(person));
        }

        public static void AnnounceNewUser(string fullName, string companyEmail)
        {
            Console.WriteLine("Hi, " + fullName + ". Your email address is: " + companyEmail);
        }
    }
}
