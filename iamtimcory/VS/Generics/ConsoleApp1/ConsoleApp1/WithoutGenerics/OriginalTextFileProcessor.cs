using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Models;

namespace ConsoleApp1.WithoutGenerics
{
    class OriginalTextFileProcessor
    {
        public static void SavePersons(List<Person> persons, string personsfile)
        {
            List<string> lines = new List<string>();

            // Header info.
            lines.Add(@"FirstName,IsDeceased,LastName");

            foreach(Person p in persons)
            {
                lines.Add($"{p.FirstName},{p.IsDeceased},{p.LastName}");
            }

            Console.WriteLine("Writing Persons to Persons file...");
            System.IO.File.WriteAllLines(personsfile, lines);

        }

        public static List<Person> LoadPersons(string personsfile)
        {

            Console.WriteLine("Loading from Persons file...", personsfile);
            List<string> lines = System.IO.File.ReadAllLines(personsfile).ToList();

            // remove header for now.
            lines.RemoveAt(0);

            // create new list and add.
            List<Person> persons = new List<Person>();
            
            foreach(string line in lines)
            {
                var vals = line.Split(',');
                Person p = new Person();

                p.FirstName = vals[0];
                p.IsDeceased = bool.Parse(vals[1]);
                p.LastName = vals[2];

                persons.Add(p);
            }

            return persons;

        }

        public static void SaveLogEntries(List<LogEntry> entries, string entriesfile)
        {
            List<string> lines = new List<string>();

            // Header info.
            lines.Add(@"Message,TimeOfEvent,ErrorCode");

            foreach (LogEntry e in entries)
            {
                lines.Add($"{e.Message},{e.TimeOfEvent},{e.ErrorCode}");
            }
            Console.WriteLine("Writing Entries to Entries file...");
            System.IO.File.WriteAllLines(entriesfile, lines);

        }

        public static List<LogEntry> LoadLogEntries(string entriesfile)
        {
            Console.WriteLine("Loading from Entries file...", entriesfile);
            List<string> lines = System.IO.File.ReadAllLines(entriesfile).ToList();

            // remove header for now.
            lines.RemoveAt(0);

            // create new list and add.
            List<LogEntry> entries = new List<LogEntry>();

            foreach (string line in lines)
            {
                var vals = line.Split(',');
                LogEntry e = new LogEntry();

                e.Message = vals[0];
                e.TimeOfEvent = DateTime.Parse(vals[1]);
                e.ErrorCode = int.Parse(vals[2]);

                entries.Add(e);
            }

            return entries;

        }
    }
}
