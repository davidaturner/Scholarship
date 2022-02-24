using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1.Clean
{
    public static class PersonDataCaptureClean
    {
        public static Person Create()
        {
            Person person = new Person();

            StandardMessages.DisplayPromptForFieldName("First Name");
            person.FirstName = Console.ReadLine();

            StandardMessages.DisplayPromptForFieldName("Last Name");
            person.LastName = Console.ReadLine();

            return person;
        }
    }
}
