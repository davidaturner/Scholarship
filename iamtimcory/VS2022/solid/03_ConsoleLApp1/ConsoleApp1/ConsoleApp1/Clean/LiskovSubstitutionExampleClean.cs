using System;

namespace ConsoleApp1.Clean
{
    public class LiskovSubstitutionExampleClean
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

//            ManagerClean manager = new ManagerClean()
//            IManagerClean manager = new ManagerClean()
            IManagerClean manager = new CEOClean()
            {
                FirstName = "Emma",
                LastName = "Stone"
            };
            manager.CalculatePerHourRate(4);

//            EmployeeCleanBase employee = new EmployeeClean()    // Works, Ok!
//          EmployeeCleanBase employee = new ManagerClean()       // Works, but CalculatePerHourRate is wrong. Ok!
//            EmployeeCleanBase employee = new CEOClean()       // Now Works! 
//            IManaged employee = new EmployeeClean()
            IManaged employee = new ManagerClean()
            {
                FirstName = "Tim",
                LastName = "Corey"
            };
            employee.AssignManager(manager);                    // Exists only with IManaged
            employee.CalculatePerHourRate(2);

            Console.WriteLine($"{employee.FirstName}'s salary is ${employee.Salary}/hour.");

            Console.WriteLine("\r\n>>> DONE!");

        }
    }
}
