using System;

namespace _2._9
{
    class Program
    {
        static void Concat()
        {
            var morningGreeting = "Good Morning,";
            var name = "Alex";
            Console.WriteLine(morningGreeting);
            Console.WriteLine(name);
            Console.WriteLine(morningGreeting + " " + name);

            bool isProgrammer = true;
            Console.WriteLine("Am I a programmer? " + isProgrammer);

            int age = 30;
            Console.WriteLine("My age: " + age);
        }

        static void Length()
        {
            var morningGreeting = "Good Morning";
            var greetingLength = morningGreeting.Length;
            Console.WriteLine(greetingLength);
        }

        static void LowercaseUppercase()
        {
            var morningGreeting = "Good Morning";
            Console.WriteLine(morningGreeting);
            Console.WriteLine(morningGreeting.ToUpper());
            Console.WriteLine(morningGreeting.ToLower());
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Concat();
            Length();
            LowercaseUppercase();
        }
    }
}
