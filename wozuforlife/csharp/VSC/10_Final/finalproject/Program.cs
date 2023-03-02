using System;
using games;

namespace finalproject
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            int limitVal1 = 100, limitVal2 = 9;
            // BlingBlong bb = new BlingBlong();
            // bb.run(limitVal1);

            FibonacciSequence fs = new FibonacciSequence();
            fs.run(limitVal2);
        }
    }
}
