using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class ManagerClean : EmployeeClean, IManagerClean
    {
        public override void CalculatePerHourRate(int rank)
        {
            /*
            // Precondition violation.
            // Method is not checked (ie. is STRENGTHEN) in parent class.
            if (rank < 0 || rank > 5)
            {
                throw new Exception("Rank must be in range 1 to 5");
            }
            */
            decimal baseAmount = 19.75M;

            Salary = baseAmount + (rank * 4);
        }

        public void GeneratePerformanceReview()
        {
            Console.WriteLine($"I am reviewing a direct report's performance.");
        }
    }
}
