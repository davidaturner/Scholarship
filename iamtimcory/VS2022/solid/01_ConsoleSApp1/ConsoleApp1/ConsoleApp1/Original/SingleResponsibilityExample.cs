using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Classes;

namespace ConsoleApp1.Original
{
    public static  class SingleResponsibilityExample
    {
        public static void PersonDataCapture()
        {
            // SRP
            // Each class has a single responsibility.
            // Each class has only one reason to change.

            //Responsibility 1: Standard Message
            Console.WriteLine("Hello, World");

            //Responsibility 2: PersonDataCapture
            Person user = new Person();

            Console.Write("Enter First Name : ");
            user.FirstName = Console.ReadLine();

            Console.Write("Enter Last Name : ");
            user.LastName = Console.ReadLine();

            //Responsibility 3 : Verify user input.
            if (string.IsNullOrWhiteSpace(user.FirstName))
            {
                Console.WriteLine("You didn't enter a First Name.");
                Console.WriteLine("\r\n>>> Done!");
                return;
            }
            if (string.IsNullOrWhiteSpace(user.LastName))
            {
                Console.WriteLine("You didn't enter a Last Name.");
                Console.WriteLine("\r\n>>> Done!");
                return;
            }

            //Responsibility 4: Create Company Username
            string fullName = user.FirstName + " " + user.LastName;
            string companyEmail = user.FirstName.Substring(0, 1) + user.LastName + "@yourcompany.com";

            //Responsibility 5: Alert to new fullName and companyEmail.
            Console.WriteLine("Hi, " + fullName + ". Your email address is: " + companyEmail);

            Console.WriteLine("\r\n>>> Done!");

        }
    }
}
