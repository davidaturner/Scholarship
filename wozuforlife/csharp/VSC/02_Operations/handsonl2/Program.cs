using System;
using handsonl2.solutions;

namespace handsonl2
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            runPart1();
            // runPart2();
            // runPart3();
        }

        static void runPart1()
        {
            MovieTicketPrices mtp = new MovieTicketPrices();
            // Run solution.
            mtp.runSolution01();
            // int age = 0;
            // mtp.runSolution01(age);
        }

        static void runPart2()
        {
            MovieTicketPrices mtp = new MovieTicketPrices();
            // Run solution.
            mtp.runSolution02();
        }

        static void runPart3()
        {
            MovieTicketPrices mtp = new MovieTicketPrices();
            // Run solution.
            mtp.runSolution03();
        }
    }
}
