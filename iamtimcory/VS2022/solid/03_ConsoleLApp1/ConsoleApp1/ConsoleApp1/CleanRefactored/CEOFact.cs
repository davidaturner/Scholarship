using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Refactored
{
    public class CEOFact : EmployeeFact
    {
        public override void CalculatePerHourRate(int rank)
        {
            decimal baseAmount = 150M;

            Salary = baseAmount + rank;
        }

        public override void AssignManager(EmployeeFact manager)
        {
            throw new InvalidOperationException("The CEO doesn't has no manager.");
        }

        // Because CEO doesn't inherit manager.
        public void GeneratePerformanceReview()
        {
            Console.WriteLine($"I am reviewing a direct report's performance.");
        }

        public void FireSomeone()
        {
            Console.WriteLine($"You're fired!");
        }
    }
}
