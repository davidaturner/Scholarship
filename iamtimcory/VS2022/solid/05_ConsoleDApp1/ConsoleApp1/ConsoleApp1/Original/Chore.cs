using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    public class Chore
    {
        public string Name { get; set; }
        public Person Owner { get; set; }
        public double HoursWorked { get; set; }

        public bool IsCompleted { get; set; }

        public void PerformHoursOfWork(double hoursWorked)
        {
            HoursWorked += hoursWorked;
            Logger.Log($"Performed Work on Task: {Name}");
        }

        public void CompleteChore()
        {
            IsCompleted = true;
            Logger.Log($"Completed Task: {Name}");

            Emailer.SendEmail(Owner, "Task: {Name} ---is Complete.");
        }
    }
}
