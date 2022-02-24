using System;

namespace ConsoleApp1.Clean
{
    public abstract class EmployeeCleanBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public decimal Salary { get; set; }

        // TODO Set up Covariance violation by using interfaces.
        // to return a different type depending on the class.

        // TODO Set up Countravariance violation by using interfaces.
        // to allow for a different input parameter type.
        public virtual void CalculatePerHourRate(int rank)
        {
            decimal baseAmount = 12.50M;

            /*
            // Postcondition violation.
            // Method is not checked (ie. is WEAKENED) in child class.
            if ((baseAmount + (rank * 2) > 26.00M))
            {
                throw new Exception("Salary cannot be greater than cap.");
            }
            */
            Salary = baseAmount + (rank * 2);

        }
    }
}