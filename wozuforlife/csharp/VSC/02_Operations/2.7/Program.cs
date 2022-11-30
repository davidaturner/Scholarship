using System;

namespace _2._7
{
    class Program
    {
        static void AdditionSubtraction()
        {

            var sum = 2 + 2;
            Console.WriteLine(sum);

            sum = 131 - 2 - 3 + 4 + 5;
            Console.WriteLine(sum);

            sum = 4;
            sum = sum + 1;
            Console.WriteLine(sum);

            sum = 4;
            sum++;
            Console.WriteLine(sum);

            sum = 4;
            sum--;

            Console.WriteLine(sum);
        }

        static void MultiplicationDivision()
        {

            // multiplication
            var product = 6 * 3;
            Console.WriteLine(product);

            // division
            var quotient = 6 / 3;
            Console.WriteLine(quotient);
        }

        static void HierarchyOfOperation()
        {
            /*
            The order of how math operations are performed is called order 
            of operations. You can remember the order of operations for math 
            formulas with the acronym P.E.M.D.A.S.:
                Parenthesis
                Exponents
                Multiplication
                Division
                Addition
                Subtraction
            The above means the first thing that will be evaluated will be those 
            expressions within parentheses.Next follows exponents(which hasn't 
            been covered yet). After that, multiplication and division are treated 
            with the same level of importance and are evaluated. The last operations 
            to be performed are addition and subtraction.
            */
            Console.WriteLine(2 * 3 + 4);
            Console.WriteLine(2 + 3 * 4);
            Console.WriteLine(2 * (4 / 2 + 5 * 3));
        }

        static void Modulus()
        {
            var remainder = 5 % 2;
            Console.WriteLine(remainder);

            remainder = 54321 % 12345;
            Console.WriteLine(remainder);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            AdditionSubtraction();
            MultiplicationDivision();
            HierarchyOfOperation();
            Modulus();
        }
    }
}
