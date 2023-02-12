using System;

namespace lessons
{
    class _04_02
    {
        public static void GreetPerson(string personName)
        {
            Console.WriteLine("Hello " + personName);
        }

        public static void run()
        {
            GreetPerson("Emilia");
            GreetPerson("Thomas");
            GreetPerson("Gail");
            GreetPerson("Abraham");
        }
    }
}
