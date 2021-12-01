using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Models;
using ConsoleApp1.WithoutGenerics;
using ConsoleApp1.WithGenerics;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            DemonstrateTextFileStorage();

            Console.Write("Press ENTER Key to continue...");
            Console.ReadLine();
        }

        private static void DemonstrateTextFileStorage()
        {
            List<Person> persons = new List<Person>();
            List<LogEntry> entries = new List<LogEntry>();

            // specified file to save data too.
            string personsfile = @"C:\Demo\persons.csv";
            string entriesfile = @"C:\Demo\entries.csv";

            // populate lists to be stored in files
            PopulateLists(persons, entries);

            /*
            // Original typed solutions.
            OriginalTextFileProcessor.SavePersons(persons, personsfile);
            OriginalTextFileProcessor.LoadPersons(personsfile);

            OriginalTextFileProcessor.SaveLogEntries(entries, entriesfile);
            OriginalTextFileProcessor.LoadLogEntries(entriesfile);
            */

            // New generic solutions!
            GenericsTextFileProcessor.SaveToTextFile(persons, personsfile);
            GenericsTextFileProcessor.LoadFromTextFile<Person>(personsfile);

            GenericsTextFileProcessor.SaveToTextFile(entries, entriesfile);
            GenericsTextFileProcessor.LoadFromTextFile<LogEntry>(entriesfile);

        }

        private static void PopulateLists(List<Person> persons, List<LogEntry> entries)
        {
            persons.Add(new Person { FirstName = "Joe", LastName = "Santos" });
            persons.Add(new Person { FirstName = "Marty", LastName = "McFly", IsDeceased = true});
            persons.Add(new Person { FirstName = "Helena", LastName = "Oftrosky" });

            entries.Add(new LogEntry { Message = "Ready!", ErrorCode = 0, TimeOfEvent = DateTime.Now });
            entries.Add(new LogEntry { Message = "IO Error", ErrorCode = 1000, TimeOfEvent = DateTime.Now });
            entries.Add(new LogEntry { Message = "File Error", ErrorCode = 1999, TimeOfEvent = DateTime.Now });
        }

        private static void GTGExample()
        {
            // instance of string type
            GFG<string> name = new GFG<string>();
            name.value = "GeeksforGeeks";

            // instance of float type
            GFG<float> version = new GFG<float>();
            version.value = 5.0F;

            // display GeeksforGeeks
            Console.WriteLine(name.value);

            // display 5
            Console.WriteLine(version.value);
        }

        private static void GTHExample()
        {
            List<int> intlist = new List<int> { 1, 2, 3 };
            List<string> strlist = new List<string> { "Hello", "World" };

            // instance of string type
            GFH<int> ints = new GFH<int>();
            ints.ToList = intlist;

            // instance of float type
            GFH<string> words = new GFH<string>();
            words.ToList = strlist;

            // display GeeksforGeeks
            ints.Display();

            // display 5
            words.Display();
        }

        private static void GTIExample()
        {
            List<Person> personslist = new List<Person> {
                new Person("Joe", "Santos", false.ToString())
            };
            List<LogEntry> entrieslist = new List<LogEntry> {
                new LogEntry("Test error message", 99334.ToString(), DateTime.Now.ToString())
            };

            // instance of string type
            GFI<Person> persons = new GFI<Person>();
            persons.ToList = personslist;

            // instance of float type
            GFI<LogEntry> entries = new GFI<LogEntry>();
            entries.ToList = entrieslist;

            // display GeeksforGeeks
            persons.Display();

            // display 5
            entries.Display();
        }
    }

}
