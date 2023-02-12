using System;
using System.Diagnostics;
using a = lessons.SumIntegerAlgorithms;

namespace lessons
{
    // Another aspect of the study of algorithms is learning how to instrument the 
    // code to measure performance-related statistics, so that you can test and 
    // compare performance through benchmarking measurements.C# programs can make use 
    // of the StopWatch class to make precise measurements.
    public class SumIntegerAlgorithms
    {
        // "simple" algorithm (iterative approach using a for loop)
        public static int SimpleSumIntegerUpToLimit(int limit)
        {
            int sum = 0;
            for (int count = 1; count <= limit; count++)
            {
                sum += count;
            }
            return sum;
        }

        // "clever" algorithm using Gauss' formula
        public static int CleverSumIntegerUpToLimit(int limit)
        {
            return (limit * (limit + 1)) >> 1;
        }
    }

    class _09_02_1
    {
        static void RunSimpleAndClever(int limit)
        {

            // Ticks, in the above output, refers to the frequency of the stopwatch. 
            // For the above output, 1 tick is 1 nanosecond, or 1 billionth of a second.
            Stopwatch stopWatch = new Stopwatch();
            int result;

            // test speed of the "simple" algorithm to limit
            stopWatch.Start();
            result = a.SimpleSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nSimple algorithm to " + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();

            // test speed of the "clever" algorithm to 10
            stopWatch.Start();
            result = a.CleverSumIntegerUpToLimit(limit);
            stopWatch.Stop();
            Console.WriteLine("\nClever algorithm to " + limit + " is: " + result);
            Console.WriteLine("Ticks: " + stopWatch.ElapsedTicks);
            stopWatch.Reset();
        }

        public static void run()
        {
            // run performance tests using limit = 10.
            RunSimpleAndClever(10);

            // repeat performance tests using limit = 10.
            RunSimpleAndClever(10);

            // run performance test using limit = 1000.
            RunSimpleAndClever(1000);

            // As you might expect, the clever version is faster than the simple 
            // version, especially for larger numbers (see the output above where 
            // it's summing to 1000 in 45 versus 2,125 nanoseconds). But the "clever" 
            // solution is inferior in one respect: the multiplication it uses causes 
            // an overflow error at a lower limit than the simple solution does, as can 
            // be seen in the second set of outputs where it's summing to 10(615 versus 
            // 743 nanoseconds).Note also, that the initial two measurements must be 
            // ignored because, as you can see from the output, the first run through 
            // each algorithm suffers from some cold start overhead, as can be seen by 
            // those large first two tick count numbers that drastically shrink the 
            // second time around.
        }
    }
}