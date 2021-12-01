using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public double Salary { get; set; }

        public void CalculatePerHourRate(int rank)
        {
            Salary = 0.00;
        }

        public void AssignManager(Manager manager)
        {

        }
    }
}
