using System;
using handsonl5.solutions;

namespace handsonl5
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            // runPart1();
            // runPart2();
            runPart3();

        }

        static void writeLine(string firstName, string lastName, int age)
        {
            Console.WriteLine(
                string.Format("{0} {1} is {2} years old.",
                                firstName, lastName, age));
        }

        static void runPart1()
        {
            // Henry Boswald is 33 years old.
            // Lola Boswald is 31 years old.
            Person hb = new Person();
            hb.FirstName = "Henry";
            hb.LastName = "Boswald";
            hb.Age = 33;

            Person lb = new Person();
            lb.FirstName = "Lola";
            lb.LastName = "Boswald";
            lb.Age = 31;

            Console.WriteLine(
                string.Format("{0} {1} is {2} years old.",
                                hb.FirstName, hb.LastName, hb.Age));
            Console.WriteLine(
                string.Format("{0} {1} is {2} years old.",
                                lb.FirstName, lb.LastName, lb.Age));
        }

        static void runPart2()
        {

            Person eh = new Person("Emilia", "Hill", 42);
            Person lh = new Person("Lucius", "Hill", 45);

            writeLine(eh.FirstName, eh.LastName, eh.Age);
            writeLine(lh.FirstName, lh.LastName, lh.Age);
        }

        static void runPart3()
        {
            // Attempted to set age to an invalid value. Set age to 
            // 0 instead.
            // Emilia Hill is 0 years old.
            // Lucius Hill is 45 years old.

            Person eh = new Person("Emilia", "Hill", -5);
            Person lh = new Person("Lucius", "Hill", 45);

            writeLine(eh.FirstName, eh.LastName, eh.Age);
            writeLine(lh.FirstName, lh.LastName, lh.Age);
        }
    }


}
