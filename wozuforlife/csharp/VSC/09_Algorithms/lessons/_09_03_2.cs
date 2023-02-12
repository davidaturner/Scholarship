using System;

class _09_03_2
{
    static int EuclideanAlgorithm(int a, int b)
    {
        while (a != 0 && b != 0)
        {
            if (a > b)
                a %= b;
            else
                b %= a;
        }

        if (a == 0)
            return b;
        else
            return a;
    }

    public static void run()
    {
        int val1 = 252;
        int val2 = 105;
        int gcd = EuclideanAlgorithm(val1, val2);
        Console.WriteLine("The GCD of {0} and {1} is {2}.", val1, val2, gcd);
    }
}
