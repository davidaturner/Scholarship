using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Models
{
    class LogEntry
    {
        public string Message { get; set; }
        public int ErrorCode { get; set; }
        public DateTime TimeOfEvent { get; set; }

        public LogEntry() { }

        public LogEntry(string message, string errorcode, string timeofevent)
        {
            Message = message;
            ErrorCode = int.Parse(errorcode);
            TimeOfEvent = DateTime.Parse(timeofevent);
        }
    }
}
