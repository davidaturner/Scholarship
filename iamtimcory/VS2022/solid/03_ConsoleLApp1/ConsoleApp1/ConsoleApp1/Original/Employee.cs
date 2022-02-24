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

        public decimal Salary { get; set; }

        public Employee Manager { get; set; }

        // TODO Set up Covariance violation by using interfaces.
        // to return a different type depending on the class.

        // TODO Set up Countravariance violation by using interfaces.
        // to allow for a different input parameter type.
        public virtual void CalculatePerHourRate(int rank)
        {
            decimal baseAmount = 12.50M;

            // Postcondition violation.
            // Method is not checked (ie. is WEAKENED) in child class.
            if ((baseAmount + (rank * 2) > 26.00M))
            {
                throw new Exception("Salary cannot be greater than cap.");
            }

            Salary = baseAmount + (rank * 2);

        }

        public virtual void AssignManager(Employee manager)
        {
            // Stimulating other tasks.
            // Otherwise this would just be a Set.
            Manager = manager;
        }

        /*
         * OCP violation if when creating the class Janitor
         * you must override the following (Since Janitor has
         * keys for multiple wards.) You then must alter this
         * parent class so that the method is virtual.
        public string GetSecurityKey(String ward)
        {
            return (ward == "frontdoor") ? "key to frontdoor" : null;
        }
        */
    }
}
