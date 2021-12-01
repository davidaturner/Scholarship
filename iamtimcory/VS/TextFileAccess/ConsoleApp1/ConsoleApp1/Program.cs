using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace ConsoleApp1
{

    class Program
    {
        static void Main(string[] args)
        {
//            string filePath = "C:\\Demo\\Demo.txt";
            string filePath = @"C:\Demo\Demo.txt";

            List<Person> persons = new List<Person>();

            List<string> lists = File.ReadAllLines(filePath).ToList();

            foreach( var list in lists)
            {
                string[] entries = list.Split(',');

                Person newPerson = new Person();

                // TO-DO: Error checking...
                newPerson.FirstName = entries[0];
                newPerson.LastName = entries[1];
                newPerson.Age = Int32.Parse(entries[2]);

                persons.Add(newPerson);
            }

            persons.Add(new Person
            {
                FirstName = "Lonnie",
                LastName = "Smither",
                Age = 22
            });

//            displayPersons(persons);
            foreach(var person in persons)
            {
                // better performer.
                Console.WriteLine($"{person.FirstName} {person.LastName}, {person.Age}");
            }

            Console.WriteLine("\r\nPress Enter to shut down...");
            Console.ReadLine();
        }

        public static void Exercise ()
        {
//            string filePath = "C:\\Demo\\Demo.txt";
            string filePath = @"C:\Demo\Demo.txt";

            if (!File.Exists(filePath))
            {
                Console.WriteLine("Creating...");
                RunIfFileDoesNotExist(filePath);
            }

//            string[] lines = File.ReadAllLines(filePath);
            List<string> lines = File.ReadAllLines(filePath).ToList<string>();
            foreach (string line in lines)
            {
                Console.WriteLine(line);
            }
            lines.Add(new Person("Ally", "Sheedy", 56).ConvertToCvs());

            File.WriteAllLines(filePath, lines);

            Console.WriteLine("\r\nPress Enter to shut down...");
            Console.ReadLine();
        }

        public static void displayPersons(List<Person> persons)
        {
            foreach(Person person in persons)
            {
                Console.WriteLine(person.Describe());
            }
        }
        public static void RunIfFileDoesNotExist(string filePath)
        {
            File.WriteAllText(filePath, "Joe, Santos, 37");
        }
    }
}
