using System;
using ConsoleApp1.Original;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Logger.ToConsole("Hello World!");
            Logger.ToConsole("\r\nBeginning Application...");

            Manager manager = new Manager()
            {
                FirstName = "Joe",
                LastName = "Santos"
            };
            manager.CalculatePerHourRate(4);

            Employee employee = new Employee()
            {
                FirstName = "Bob",
                LastName = "Barker"
            };
            employee.CalculatePerHourRate(2);
            employee.AssignManager(manager);

            Logger.ToConsole($"{employee.FirstName}'s Salary is ${employee.Salary}/hour.");

            Logger.ToConsole("\r\n\r\nDONE!");
        }
    }
}
