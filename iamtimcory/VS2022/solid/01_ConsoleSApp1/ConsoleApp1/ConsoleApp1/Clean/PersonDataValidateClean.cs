using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1.Clean
{
    public static class PersonDataValidateClean
    {
        public static bool Validate(Person person)
        {
            return ValidateFirstName(person) ||
                    ValidateLastName(person);

        }

        public static bool ValidateFirstName(Person person)
        {
            if (string.IsNullOrWhiteSpace(person.FirstName))
            {
                StandardMessages.DisplayValidationError("First Name");
                return false;
            }

            return true;
        }

        public static bool ValidateLastName(Person person)
        {
            if (string.IsNullOrWhiteSpace(person.LastName))
            {
                StandardMessages.DisplayValidationError("Last Name");
                return false;
            }

            return true;
        }
    }
}
