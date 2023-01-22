using System;

namespace lessons
{
    class _02_09
    {
        static public void stringFunctions()
        {
            var morningGreeting = "Good Morning,";
            var name = "Alex";
            Console.WriteLine(morningGreeting);
            Console.WriteLine(name);

            Console.WriteLine(morningGreeting + name);

            Console.WriteLine(morningGreeting + " " + name);

            bool isProgrammer = true;
            Console.WriteLine("Am I a programmer? " + isProgrammer);

            int age = 30;
            Console.WriteLine("My age: " + age);

            Console.WriteLine(morningGreeting.Length);

            Console.WriteLine(morningGreeting.ToUpper());
            Console.WriteLine(morningGreeting.ToLower());
        }

        static public void run()
        {
            _02_09.stringFunctions();
        }
    }
}