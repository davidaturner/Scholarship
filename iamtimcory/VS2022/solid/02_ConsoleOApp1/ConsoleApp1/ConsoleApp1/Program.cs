using System;
using System.Collections.Generic;
using ConsoleApp1.Original;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("\r\nStarting with the following people:");

            List<IDisplayable> candidates = new List<IDisplayable>
            {
                new Person{ FirstName = "Joe", LastName = "Santos" },
                new Person{ FirstName = "Emma", LastName = "Largo" },
                new Person{ FirstName = "Craps", LastName = "McNaught" }
            };

            Display(candidates);
            
            Console.WriteLine("\r\nTurning them to employees.");
            List<IDisplayable> newEmps = Employer.CreateEmployees(candidates);

            Display(newEmps);

            Console.WriteLine("\r\n\r\nDONE!");
        }
        private static void Display(List<IDisplayable> displayables)
        {
            foreach(IDisplayable displayable in displayables)
            {
                displayable.Display();
            }
        }
       
    }
}
