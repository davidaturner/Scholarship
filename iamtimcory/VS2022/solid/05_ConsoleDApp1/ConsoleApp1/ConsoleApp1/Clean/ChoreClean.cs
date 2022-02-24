using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class ChoreClean : IChoreClean
    {
        private ILoggerClean _logger { get; set; }
        private IMessageSender _messageSender { get; set; }

        public string Name { get; set; }
        public IPersonClean Owner { get; set; }
        public double HoursWorked { get; set; }

        public bool IsCompleted { get; set; }

        public ChoreClean(ILoggerClean logger, IMessageSender messageSender)
        {
            _logger = logger;
            _messageSender = messageSender;
        }

        public void PerformHoursOfWork(double hoursWorked)
        {
            HoursWorked += hoursWorked;
            _logger.Log($"Performed Work on Task: {Name}");
        }

        public void CompleteChore()
        {
            IsCompleted = true;
            _logger.Log($"Completed Task: {Name}");

            /* Could be Emailer. Could be Texter. No change in code here! */
            // That is because we are using interfaces. No dependencies.
            _messageSender.SendMessage(Owner, $"Task: {Name} ---is Complete.");
        }
    }
}
