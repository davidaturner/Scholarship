using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_RecursiveConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting application...\r\n");

            ATMAnalogy Exercise = new ATMAnalogy();

            Exercise.Add("Fred");
            Console.WriteLine(Exercise.TheLine[0]);

            Console.WriteLine("\r\nDONE!\r\n");
            Console.ReadLine();
        }
    }
}
