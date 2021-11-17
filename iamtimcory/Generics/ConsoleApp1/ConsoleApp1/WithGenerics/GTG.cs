using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Models;

namespace ConsoleApp1.WithGenerics
{
    // We use < > to specify Parameter type
    public class GFG<T>
    {

        // private data members
        private T data;

        // using properties
        public T value
        {

            // using accessors
            get
            {
                return this.data;
            }
            set
            {
                this.data = value;
            }
        }
    }

    public class GFH<T>
    {

        // private data members
        private List<T> Lines;

        // using properties
        public List<T> ToList
        {

            // using accessors
            get
            {
                return this.Lines;
            }
            set
            {
                this.Lines = value;
            }
        }

        public void Display()
        {
            Console.WriteLine(Lines[0]);
        }
    }

    public class GFI<T>
    {

        // private data members
        private List<T> Lines;

        // using properties
        public List<T> ToList
        {

            // using accessors
            get
            {
                return this.Lines;
            }
            set
            {
                this.Lines = value;
            }
        }

        public void Display()
        {
            foreach(var line in Lines)
            {
                GetPropertyValues(line);
            }
        }

        public static void GetPropertyValues(Object obj)
        {
            Type t = obj.GetType();

//            Console.WriteLine("Type is: {0}", t.Name);
            PropertyInfo[] props = t.GetProperties();
 //           Console.WriteLine("Properties (N = {0}):", props.Length);
            if (t == new Person().GetType())
            {
                Person print = new Person(props[0].GetValue(obj).ToString(),
                                    props[1].GetValue(obj).ToString(),
                                    props[2].GetValue(obj).ToString());
                Console.WriteLine($"OBJECT: {print.FirstName} {print.LastName}, IsDeceased: {print.IsDeceased}");
            }
            else if (t == new LogEntry().GetType())
            {
                LogEntry print = new LogEntry(props[0].GetValue(obj).ToString(),
                                    props[1].GetValue(obj).ToString(),
                                    props[2].GetValue(obj).ToString());
                Console.WriteLine($"OBJECT: {print.Message} {print.ErrorCode} At: {print.TimeOfEvent}");
            }

            /*
            foreach (var prop in props)
                if (prop.GetIndexParameters().Length == 0)
                    Console.WriteLine("   {0} ({1}): {2}", prop.Name,
                                      prop.PropertyType.Name,
                                      prop.GetValue(obj));
                else
                    Console.WriteLine("   {0} ({1}): <Indexed>", prop.Name,
                                      prop.PropertyType.Name); 
            */
        }

    }
}
