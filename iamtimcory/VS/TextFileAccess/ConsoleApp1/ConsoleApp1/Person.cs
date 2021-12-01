using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }

        public Person () : this(null, null, 0)
        { }

        public Person( string firstName, string lastName, int age )
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
        }

        public string FullName()
        {
            return FirstName + " " + LastName;
        }

        public string Describe()
        {
            return FullName() + ", " + Age;
        }

        public string ConvertToCvs()
        {
            return FirstName + ", " + LastName + ", " + Age;
        }
    }
}
