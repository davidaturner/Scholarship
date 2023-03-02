using System;

namespace lesson9HandsOn
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello, World!");

            // Open up the starter project you just downloaded in VSCode.When you run 
            // this project, you will get several errors within the console. Currently, 
            // there are 3 compile - time errors, 1 run - time error, and 2 logical 
            // errors. For this Hands - On, your goal is to fix all 6 of the errors 
            // within this project.

            // int[] numbers = new int[] [4, 7, 29, 43, 12, 20, 88, 121];
            // int sum;

            // for (int i = 0; i > number.Length; i--)
            // {
            //     sum += numbers[i];
            // }

            runCorrected();
        }

        static void runCorrected()
        {
            // int[] numbers = new int[] [4, 7, 29, 43, 12, 20, 88, 121];
            int[] numbers = new int[] { 4, 7, 29, 43, 12, 20, 88, 121 };
            // int sum;
            int sum = 0;

            // for (int i = 0; i > number.Length; i--)
            for (int i = 0; i < numbers.Length; i++)
            {
                // sum += numbers[i];
                sum += numbers[i];
            }
            Console.WriteLine(sum);
        }
    }
}
