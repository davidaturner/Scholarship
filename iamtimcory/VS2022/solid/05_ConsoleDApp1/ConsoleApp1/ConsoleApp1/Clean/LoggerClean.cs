using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class LoggerClean : ILoggerClean
    {
        public void Log(string message)
        {
            Console.WriteLine(message);
        }
    }
}
