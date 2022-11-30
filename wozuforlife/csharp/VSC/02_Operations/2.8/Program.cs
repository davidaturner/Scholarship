using System;

namespace _2._8
{
    class Program
    {
        static double NewPayments(double cost, double deliveryFee)
        {
            return (cost + deliveryFee) * 100;
        }

        static double GetAverage(int a, int b)
        {
            double average = (a + b) / 2;
            return average;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(NewPayments(1.5, 0.07 * 1.5));
            Console.WriteLine(GetAverage(2, 2));
        }
    }
}
