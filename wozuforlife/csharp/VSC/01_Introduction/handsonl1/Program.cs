using System;
using handsonl1.solutions;

namespace handsonl1
{
    class Program
    {
        static void Main(string[] args)
        {
            // runHelloWorld();
            runPart1();
            // runPart2();
            // runPart3();
        }

        static void runPart1()
        {
            WearSunglasses ws = new WearSunglasses();
            ws.runSol01();
        }

        static void runPart2()
        {
            WearSunglasses ws = new WearSunglasses();
            ws.runSol02();
        }
        static void runPart3()
        {
            WearSunglasses ws = new WearSunglasses();
            ws.runSol03();
        }

        static void runHelloWorld()
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
