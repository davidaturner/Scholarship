using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1.Clean
{
    public class SingleResponsibilityExampleClean
    {
        public static void PersonDataCapture()
        {
            // SRP
            // Each class has a single responsibility.
            // Each class has only one reason to change.

            //Responsibility 1: Standard Message
            StandardMessages.DisplayHelloworld();

            //Responsibility 2: PersonDataCapture
            Person user = PersonDataCaptureClean.Create();

            //Responsibility 3 : Verify user input.
            if ( !PersonDataValidateClean.ValidateFirstName(user))
            {
                StandardMessages.DisplayDone();
                return;
            };
            if (!PersonDataValidateClean.ValidateLastName(user))
            {
                StandardMessages.DisplayDone();
                return;
            };

            //Responsibility 4: Create Company Username
            string fullName = PersonDataGetClean.FullName(user);
            string companyEmail = PersonDataGetClean.EmailAddress(user);

            //Responsibility 5: Alert to new fullName and companyEmail.
            UserMessages.AnnounceNewUser(fullName, companyEmail);

            StandardMessages.DisplayDone();

        }
    }
}
