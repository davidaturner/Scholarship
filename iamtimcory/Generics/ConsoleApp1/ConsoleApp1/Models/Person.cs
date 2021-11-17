using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Models
{
    class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public bool IsDeceased { get; set; }

        public Person() { }

        public Person(string firstname, string lastname, string isdeceased)
        {
            FirstName = firstname;
            LastName = lastname;
            IsDeceased = bool.Parse(isdeceased);
        }
    }
}
