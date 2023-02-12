using System;

namespace lessons
{
    class _04_03
    {
        public static bool IsEven(int number)
        {
            bool result;

            // if the number is even, set variable to true
            result = (number % 2 == 0);

            // return the variable
            return result;
        }

        // add method returns an integer
        public static int Add(int number1, int number2)
        {
            return(number1 + number2);
        }

        public static void run()
        {
            Console.WriteLine(IsEven(2));

            int num1 = 1;
            int num2 = 2;

            // store the returned value of the "add" method
            int sum = Add(num1, num2);
            Console.WriteLine(sum);

            // Console.WriteLine("Hello World!");
        }
    }
}