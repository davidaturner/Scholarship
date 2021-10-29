using System;
using System.Collections.Generic;
using System.Text;

namespace Lesson1
{
    public class _04_Variables
    {
        public static string ProgramName()
        {
            return "Variables";
        }

        public static void Run()
        {
            Console.WriteLine(2);
            Console.WriteLine(2 + 6);
            Console.WriteLine(2 - 6);
            Console.WriteLine(2 * 6);
            Console.WriteLine(6 / 2);
            Console.WriteLine(6 % 2);
            // Math functions
            Console.WriteLine(Math.Abs(-40));
            Console.WriteLine(Math.Pow(3, 2));
            Console.WriteLine(Math.Sqrt(144));

            int a = 4, b = 90;
            Console.WriteLine(Math.Max(a, b));
            Console.WriteLine(Math.Min(a, b));

            Console.WriteLine(Math.Round(4.5));
            Console.WriteLine(Math.Round(4.6));

            double c = 4.9;
            Console.WriteLine(Math.Floor(c));
        }
    }
}
