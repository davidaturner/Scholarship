using System;
using System.Collections.Generic;

namespace lessons
{
    class _09_03_1
    {
        static void SieveOfEratosthenes()
        {
            // Sieve of Eratosthenes
            // O(n log log n)

            // create empty list
            List<int> nonPrimes = new List<int>();

            // define upper limit for testing
            int max = 100;

            // iterate over numbers x from 2 to square root of max
            for (int x = 2; x * x <= max; x++)
            {
                // mark off all multiples of current number x as non-prime
                for (int y = x * 2; y < max; y += x)
                {
                    if (!nonPrimes.Contains(y)) // avoid duplicates
                    {
                        nonPrimes.Add(y);
                    }
                }
            }

            // display the primes less than max
            for (int x = 2; x < max; x++) // 2 is smallest prime
            {
                if (!nonPrimes.Contains(x)) // only display if prime
                {
                    Console.WriteLine(x);
                }
            }
        }

        public static void run()
        {
            SieveOfEratosthenes();            
            // Console.WriteLine("Hello World!");
        }
    }
}