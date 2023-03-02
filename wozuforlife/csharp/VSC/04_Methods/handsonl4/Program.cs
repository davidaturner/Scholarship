using System;
using handsonl4.solutions;

namespace handsonl4
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            DoubleMe dm = new DoubleMe();
            int value = 4;

            // Doubled Number: 8
            Console.WriteLine(String.Format("Doubled Number: {0}",
                                dm.doubleMe(value)));

            // Quadrupled Number: 20
            value = 5;
            Console.WriteLine(String.Format("Quadrupled Number: {0}",
                                dm.quadrupleMe(value)));

            // Number Doubled Many Times: 16
            value = 2;
            int numberOfTimes = 3;
            Console.WriteLine(String.Format("Number Doubled Many Times: {0}",
                                dm.doubleMeManyTimes(value, numberOfTimes)));
        }
    }
}
