using System;

namespace ConsoleApp1.Original
{
    public class LiskovSubstitutionExample
    {
        //LSP
        // Basic: If object S is a subtype of P
        // Then object S may be replaced by the object P
        // Without break anything.
        // It can however allow side effects 
        // See: CalculatePerHourRate().
        // An uncaught exception is unexpected.
        // Ask question: Is CEO ISA an Employee? Nope.
        // Don't have a subclass have methods that it doesn't need it.
        public void Main()
        {
            Console.WriteLine("Hello World!\r\n");

            Manager manager = new Manager()
            {
                FirstName = "Emma",
                LastName = "Stone"
            };
            manager.CalculatePerHourRate(4);

            Employee employee = new Employee()    // Works, Ok!
//            Employee employee = new Manager()       // Works, but CalculatePerHourRate is wrong. Ok!
//            Employee employee = new CEO()    // Doesn't work. Assign Manager. LSP violation!!
            {
                FirstName = "Tim",
                LastName = "Corey"
            };
            employee.AssignManager(manager);
            employee.CalculatePerHourRate(2);

            Console.WriteLine($"{employee.FirstName}'s salary is ${employee.Salary}/hour.");

            Console.WriteLine("\r\n>>> DONE!");

        }
    }
}
