using System;

namespace lessons
{
    class _02_07
    {
        static void additionSubtracting()
        {
            var sum = 2 + 2;
            Console.WriteLine(sum);

            sum = 131 - 2 - 3 + 4 + 5;
            Console.WriteLine(sum);

            sum = 4;
            Console.WriteLine(sum);

            // add one to the variable
            sum = sum + 1;

            Console.WriteLine(sum);

            sum = 4;

            // add one to the variable
            sum++;

            Console.WriteLine(sum);

            sum = 4;

            // subtract one from the variable
            sum--;

            Console.WriteLine(sum);
        }

        static public void multiplicationDivision()
        {
            // multiplication
            var product = 6 * 3;
            Console.WriteLine(product);

            // division
            var quotient = 6 / 3;
            Console.WriteLine(quotient);

        }

        static public void hierarchy()
        {
            //             The order of how math operations are performed is called order of 
            //             operations. You can remember the order of operations for math formulas 
            //             with the acronym P.E.M.D.A.S.:

            // Parenthesis
            // Exponents
            // Multiplication
            // Division
            // Addition
            // Subtraction
            //             The above means the first thing that will be evaluated will be those 
            //             expressions within parentheses.Next follows exponents(which hasn't 
            //             been covered yet). After that, multiplication and division are treated 
            //             with the same level of importance and are evaluated. The last operations 
            //             to be performed are addition and subtraction.

            Console.WriteLine(2 * 3 + 4);
            Console.WriteLine(2 + 3 * 4);

            // Example of order evaluation
            Console.WriteLine("2 * (4 / 2 + 5 * 3) becomes...");
            Console.WriteLine("2 * (2 + 5 * 3) becomes...");
            Console.WriteLine("2 * (2 + 15) becomes...");
            Console.WriteLine("2 * (17) becomes...");
            Console.WriteLine(34);
        }

        public static void modulus()
        {
            var remainder1 = 5 % 2;
            Console.WriteLine(remainder1);

            var remainder2 = 54321 % 12345;
            Console.WriteLine(remainder2);
        }

        static public void run()
        {
            _02_07.additionSubtracting();
            _02_07.multiplicationDivision();
            _02_07.hierarchy();
            _02_07.modulus();
        }
    }
}
