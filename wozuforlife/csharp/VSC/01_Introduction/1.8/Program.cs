using System;

namespace _1._8
{
    class Program
    {
        static int Age()
        {
            int age = 35;
            return age;
        }

        static String Name()
        {
            String name = "Joe Santos";
            return name;
        }

        static double Number()
        {
            double number = 1.214;
            return number;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            String activity = "Age: " + Age() + " Name: " + Name()
                                + " Number: " + Number();
            Console.WriteLine(activity);
        }
    }
}
