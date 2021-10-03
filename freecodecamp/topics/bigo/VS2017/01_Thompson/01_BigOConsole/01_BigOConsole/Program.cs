using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_BigOConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            // Big O notation is used to analyze the efficiency of an algorithm
            // as its input approaches infinity. 

            Console.WriteLine("\r\nApplication STARTED...\r\n");

            // Big O Examples
            int convertHoursIntoMinutes = 60;
            _02_Linear.PracticeTotalTime bigO = new _02_Linear.PracticeTotalTime(convertHoursIntoMinutes);

            //            double[] dentistHoursThisWeek = { 8, 7.5, 7.5, 10 };
            double[] dentistHoursThisWeek = { 8, 7.5, 7.5, 10, 7.2, 9.5, 8, 8 };
            // O(N)
            bigO.CalculateTotalTime(dentistHoursThisWeek);

            Console.WriteLine("\r\n...Done!\r\n");
            Console.ReadLine();
        }
    }
}
