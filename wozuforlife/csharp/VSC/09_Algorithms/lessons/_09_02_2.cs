using System;
using System.Diagnostics;
using a = lessons.SumIntegerAlgorithms;

namespace lessons
{
    class _09_02_2
    {
        public static void run()
        {
            int limit;
            int result;
            Stopwatch stopWatch = new Stopwatch();

            // test speed of the "simple" algorithm to 10
            limit = 10;
            stopWatch.Start();
            result = a.SimpleSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nSimple algorithm to" + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();

            // test speed of the "clever" algorithm to 10
            stopWatch.Start();
            result = a.CleverSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nClever algorithm to" + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();

            // repeat "simple" algorithm test
            limit = 10;
            stopWatch.Start();
            result = a.SimpleSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nSimple algorithm to" + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();

            // repeat "clever" algorithm test
            stopWatch.Start();
            result = a.CleverSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nClever algorithm to" + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();

            // test speed of the "simple" algorithm to 1000
            limit = 1000;
            stopWatch.Start();
            result = a.SimpleSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nSimple algorithm to" + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();

            // test speed of the "clever" algorithm to 1000
            stopWatch.Start();
            result = a.CleverSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nClever algorithm to" + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();
        }
    }
}