using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_BigOConsole
{
    public class _04_LogN
    {
        public class BinarySearchFun : SimpleSearchFun
        {
            protected int MidpointOffset { get; set; }

            public BinarySearchFun(int[] arr, int offset) : base(arr)
            {
                MidpointOffset = offset;
            }

            // Determine value in arr at midpoint.
            // If value == goal, return goal found!
            // Else if start == end, return goal not found!
            // Update start if value is less than goal.
            // Update end if value is is greater than goal.
            // Loop and calculate again.
            // Big O: LogN
            public override Boolean FindValue(int value)
            {
                SetupPage(value);

                int start = 0;
                int end = OrderedArr.Length - 1;

//                Boolean found = FindItRecurseItBetter(value, start, end);
                Boolean found = FindItIteratively(value, start, end);
                ResultsPage(value, found);

                return true;
            }

            // Better solution.
            private Boolean FindItRecurseItBetter(int goal, int start, int end)
            {

                // Assuming no offset. This is improved:
                // 1.Remove midpoint from input parameters. It will be calculated internally.
                // 2.Remove procedure DetermineMidpoint. No longer needed. Fix base case.
                // 3.Prove the addition of start and end divided by two is mathematically equivalent.
                //      (end - start) / 2 + start == 
                //      end/2 - start/2 + start == 
                //      start/2 + end/2 ==
                //              (start + end) / 2

                int midpoint = (start + end) / 2;
                int value = (int)OrderedArr[midpoint];

                DescribeProblem(goal, start, end, midpoint, value);

                // base case(s)
                if (value == goal)
                {
                    return true;
                }

                if (start > end)
                {
                    return false;
                }

                // recursive case
                if (value < goal)
                {
                    return FindItRecurseItBetter(goal, midpoint + 1, end);
                }

                return FindItRecurseItBetter(goal, start, midpoint - 1);
            }

            // Good solution.
            private Boolean FindItRecursively(int goal, int start, int end)
            {
                if (!BoundaryCheck(start, end))
                {
                    Console.WriteLine("Boundary Check! Start: " + start + " End: " + end);
                    return false;
                }

                int midpoint = (end - start) / 2 + start;
                int value = (int)OrderedArr[midpoint];

                DescribeProblem(goal, start, end, midpoint, value);

                // base case(s)
                if (value == goal)
                {
                    return true;
                }
                if (start == end)
                {
                    return false;
                }

                // recursive case
                if (value < goal)
                {
                    start = midpoint + 1;
                }
                else
                {
                    end = midpoint - 1;
                }

                return FindItRecursively(goal, start, end);
            }

            private Boolean FindItIteratively(int goal, int start, int end)
            {
                Boolean isFound = false;

                while ( true )
                {
                    // check boundaries.
                    if ( !BoundaryCheck(start, end))
                    {
                        Console.WriteLine("Boundary Check! Start: " + start + " End: " + end);
                        break;
                    }

                    int midpoint = (end - start)/2 + start;
                    int value = (int)OrderedArr[midpoint];

                    DescribeProblem(goal, start, end, midpoint, value);

                    // other checks.
                    if (value == goal)
                    {
                        isFound = true;
                        break;
                    }
                    if (start == end)
                    {
                        break;
                    }

                    // update if not Done.
                    if (value < goal)
                    {
                        start = midpoint + 1;
                    }
                    else
                    {
                        end = midpoint - 1;
                    }
                }

                return isFound;
            }

            private Boolean BoundaryCheck(int start, int end)
            {
                return (start < 0 || start >= OrderedArr.Length ||
                    end < 0 || end >= OrderedArr.Length ||
                    start > end) ? false : true;
            }
            private int DetermineMidpoint(int start, int end)
            {
                // Disable offset functionality (performance)
                //                int midpoint = (end - start) / 2 + MidpointOffset;
                int midpoint = (end - start) / 2 + start;
                Console.WriteLine("Start: " + start + " End: " + end + " Mid: " + midpoint);
                if (midpoint < start)
                {
                    midpoint = start;
                }
                else if (midpoint > end)
                {
                    midpoint = end;
                }
                return midpoint;
            }
            private void DescribeProblem(int goal, int start, int end, int midpoint, int value)
            {
                Console.WriteLine("Goal: " + goal + " Start: " + start + " End: " + end + " Mid: " + midpoint + " Value: " + value);
            }
        }

        public class SimpleSearchFun
        {
            protected int[] OrderedArr { get; set; }

            public SimpleSearchFun(int[] arr)
            {
                OrderedArr = arr;
            }

            public virtual Boolean FindValue(int value)
            {
                SetupPage(value);

                // O(N)
                Boolean found = false;
                for (int i = 0; i < OrderedArr.Length; i++)
                {
                    if (OrderedArr[i] == value)
                    {
                        found = true;
                    }
                }

                ResultsPage(value, found);

                return found;

            }

            protected void SetupPage(int value)
            {
                Console.WriteLine("Question: Is " + value + " found in Ordered Array?");
                Console.WriteLine("Ordered Array: " + Other.Describe(OrderedArr));
            }
            protected void ResultsPage(int goal, Boolean found)
            {
                if (found)
                {
                    Console.WriteLine("Yes! Goal: " + goal + " ...Found.");
                }
                else
                {
                    Console.WriteLine("No! Goal: " + goal + " ...Not Found.");
                }
            }
        }

        public class LogarithmFun
        {
            public int Logbase { get; set; }

            public LogarithmFun(int logbase)
            {
                Logbase = logbase;
            }

            // For computer science, the base is always 2.
            public int FindThePower(int someNumber)
            {
//                int powerNumber = FindIt(someNumber);     // recursive
                int powerNumber = FindItAlso(someNumber);   // iterative

                // determine the multiple.
                int verified = 1;
                for (int i = 0; i < powerNumber; i++)
                {
                    verified *= Logbase;
                }

                // find the power.
                Console.WriteLine("Finding the Power.\r\n");
                if (someNumber == verified)
                {
                    Console.WriteLine("Input number : " + someNumber + " IS a perfect multiple for log base: " + Logbase);
                    Console.WriteLine("Solving for verified multiple: " + verified);
                    Console.WriteLine("\r\nLog base " + Logbase + " of " + someNumber + " is : " + powerNumber);
                } else
                {
                    Console.WriteLine("Input number: " + someNumber + " IS NOT a perfect multiple for log base: " + Logbase);
                    Console.WriteLine("Solving for next lower number (that IS a multiple): " + verified);
                    Console.WriteLine("\r\nLog base " + Logbase + " of " + verified + " is : " + powerNumber);
                }


                return powerNumber;
            }

            // recursive solution
            private int FindIt(int someNumber)
            {
                // O(log N)

                // base case
                if (someNumber <= 1) return 0;              // O(1)

                // recursive case
                return 1 + FindIt(someNumber / Logbase);    // O(log N)
            }

            // iterative solution
            private int FindItAlso(int someNumber)
            {
                // O(log N)

                // iterative solution
                int i = 0;
                while( someNumber > 1 )                 // O(log N)
                {
                    someNumber /= Logbase;              // O(1)
                    i++;                                // O(1)
                }

                return i;
            }

        }

        public static class Other
        {
            public static string Describe(int[] arr)
            {
                StringBuilder str = new StringBuilder();
                for (int i = 0; i < arr.Length; i++)
                {
                    str.Append(arr[i] + " ");
                }

                return str.ToString();
            }

            public static Boolean CheckIfOrdered()
            {
                Console.WriteLine("Ordered Array Found!");
                return true;
            }
        }
    }
}
