using System;

namespace lessons
{
    class _02_08
    {
        static public double newPayments(double cost, double deliveryFee)
        {
            double cents = (cost + deliveryFee) * 100;
            return cents;
        }

        static public double getAverage(double a, double b)
        {
            double average = (a + b) / 2;
            return average;
        }

        static public void run()
        {
            Console.WriteLine(_02_08.newPayments(1.25, 0.07));
            Console.WriteLine(_02_08.getAverage(12, 15));
        }
    }
}


