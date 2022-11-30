using System;

namespace _2._3
{
    class Program
    {
        static void Equality()
        {
            int a = 5;
            int b = 5;
            Console.WriteLine(a == b);
        }

        static void InEquality()
        {
            int a = 5;
            int b = 6;
            Console.WriteLine(a != b);
        }

        static void EqualityResult()
        {
            int a = 5;
            int b = 6;
            bool result = (a == b);
            Console.WriteLine(result);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Equality();
            InEquality();
            EqualityResult();

        }
    }
}
