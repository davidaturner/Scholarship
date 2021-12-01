using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            // Run - dotnet run.
            Console.WriteLine("Hello World!");
            Console.WriteLine("Adding a Person...");

            using( var database = new PersonContext())
            {
                database.Add( new Person() {
                    Name = "Joe Santos"
                });
                database.SaveChanges();
            }

            Console.WriteLine("Finished!!");
            Console.ReadLine();
        }
    }
}
