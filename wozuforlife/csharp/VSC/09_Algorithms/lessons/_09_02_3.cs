using System;

namespace lessons
{
    class _09_02_3
    {
        // Big O notation is a theoretical framework in Computer Science that is used 
        // to describe and compare the performance or complexity of an algorithm.Big O 
        // notation is used to estimate an algorithm's worst-case execution time and/or 
        // maximum data storage requirements in very general mathematical terms.

        // Here are a few of the common Big O notations that you will encounter:

        // O(1) - is constant time, meaning that the algorithm execution time or space is 
        // always the same independent of the size of the input data set.No matter how 
        // much the input grows, the execution time will remain the same.

        // O(log N) - is logarithmic time, meaning that the algorithm execution time or 
        // space is proportional to the logarithm of the size of the input data set.

        // O(N) - is linear time, meaning that the algorithm execution time or space is linearly proportional to the size of the input data set. As the input data grows, the execution time grows proportionately.

        // O(N^2) - is polynomial time, meaning that the algorithm execution time or space 
        // is proportional to the square of the size of the input data set.

        // O(2^N) - is exponential time, meaning that the algorithm execution time or space 
        // is doubled whenever the size of the input data set increases by one data item.
        // This growth curve is exponential, which is not scalable, and bad news.

        public static void run()
        {
            Console.WriteLine("Hello World!");
        }
    }
}