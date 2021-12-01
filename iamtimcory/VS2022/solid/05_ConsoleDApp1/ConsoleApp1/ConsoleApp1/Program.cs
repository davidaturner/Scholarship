using System;
using ConsoleApp1.Original;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("\r\nBegin Application.");

            Person owner = new Person()
            {
                FirstName = "Tim",
                LastName = "Corey",
                Email = "tcorey@yourcompany.net",
                Phone = "412-555-1212"
            };

            Chore chore = new Chore
            {
                Name = "Eat breakfast",
                Owner = owner
            };

            chore.PerformHoursOfWork(3);
            chore.PerformHoursOfWork(1.5);
            chore.CompleteChore();

            Console.WriteLine("\r\n\r\nDONE!");

        }
    }
}
