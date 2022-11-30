using System;

namespace _2._12.handson
{
    class Program
    {
        static void Part1(int age)
        {
            // if senior citizen, pay $7
            if (age >= 65)
            {
                Console.WriteLine("Pay $7.");
            }
            else if (age > 0 && age < 13)
            {
                Console.WriteLine("Pay $8.");
            }
            else
            {
                Console.WriteLine("Pay $10.");
            }

        }

        static void Part2(int age, bool isstudent)
        {
            // if senior citizen, pay $7
            if (age >= 65)
            {
                Console.WriteLine("Pay $7.");
            }
            else if ((age > 0 && age < 13) || isstudent)
            {
                Console.WriteLine("Pay $8.");
            }
            else
            {
                Console.WriteLine("Pay $10.");
            }
        }

        static void Part3(int age, bool isstudent)
        {
            if (age < 0)
            {
                Console.WriteLine("Invalid age.");
            }
            else
            {

                // if senior citizen, pay $7
                if (age >= 65)
                {
                    Console.WriteLine("Pay $7.");
                }
                else if ((age > 0 && age < 13) || isstudent)
                {
                    Console.WriteLine("Pay $8.");
                }
                else
                {
                    Console.WriteLine("Pay $10.");
                }
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Part1(66);
            Part1(7);
            Part1(15);
            Part2(70, false);
            Part2(70, true);
            Part2(12, false);
            Part2(12, true);
            Part2(25, false);
            Part2(25, true);
            Part2(-1, false);
            Part2(-1, true);
            Part3(13, false);
            Part3(13, true);
            Part3(-1, false);
            Part3(-1, true);
        }
    }
}
