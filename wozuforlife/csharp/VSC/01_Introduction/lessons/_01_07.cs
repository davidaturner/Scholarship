using System;

namespace lessons
{
    class _01_07 {

        static public void int_examples() {
            string greeting;
            greeting = "Hello World!";

            Console.WriteLine(greeting);

            int age;
            age = 27;

            Console.WriteLine(age);

            int sum;
            sum = 2 + 2;

            int newSum;
            newSum = sum + 10;

            Console.WriteLine(sum);
            Console.WriteLine(newSum);
        }

        static public void double_examples() {

            /*
            Since double is an integer with decimal values, you can also perform 
            math equations on a double type.

            The name double refers to how accurate the decimal values can be. 
            Double takes more space in the memory of a computer but is more 
            accurate. A double has twice the precision than a float (see below). 
            The minimum and maximum values that a double can hold are about 
            4.9x10-324 and 1.8x10308 respectively. These are very precise values.
            */

            double PI = 3.1416;
            Console.WriteLine(PI);
        }

        public static void float_examples() {

            /*
                A float, similar to a double, also allows you to store decimal 
                values. When storing a float value in a variable, it's necessary 
                to append an F at the end of the number, as shown below:

                By defining a float type, this informs C# that you want to store a 
                float value (lower precision) rather than a double value (higher 
                precision). The minimum and maximum values that a float can hold 
                are about 1.4x10-45 and 3.4x1038 respectively.
            */

            float PI = 3.1416F;
            Console.WriteLine(PI);
        }

        static public void bool_examples() {
            
            bool isOpen = true;
            Console.WriteLine(isOpen);
        }

        static public void var_examples() {

            /*
            However, there is another way of declaring variables you can use. 
            Rather than using the int, string, etc. keywords, you can use var, as 
            shown below:
            */
            var numberOfDeliveries = 201;
            Console.WriteLine(numberOfDeliveries);

            /*
            Even though you didn't use the int keyword, C# still knows that 
            numberOfDeliveries should be an integer. Why? Well, when you set 201 
            to numberOfDeliveries, C# set the data type of numberOfDeliveries to 
            an int, since the type of 201 is a number.
            */
        }

        static public void run()
        {
            _01_07.int_examples();
            _01_07.double_examples();
            _01_07.float_examples();
            _01_07.bool_examples();
            _01_07.var_examples();

            // Console.WriteLine("Hello World!");
        }
    }
}