using System;

namespace lessons
{
    class _01_08 {

        static public int age() {
            int age = 25;
            return age;
        }

        static public string name() {
            string name = "Joe Santos";
            return name;
        }

        static public double number() {
            double number = 1.21d;
            return number;
        }
        
        static public void run()
        {
            Console.WriteLine(_01_08.age());
            Console.WriteLine(_01_08.name());
            Console.WriteLine(_01_08.number());
            // Console.WriteLine("Hello World!");
        }
    }
}