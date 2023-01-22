using System;

namespace lessons
{
    class _02_10
    {
        static public string getFullName(string firstName, string lastName)
        {
            string fullName = firstName + " " + lastName;
            return fullName;
        }

        static public bool doesLengthMatch(string source, int count)
        {
            bool lengthMatches = (source.Length == count);
            return lengthMatches;
        }

        static public void run()
        {
            Console.WriteLine(_02_10.doesLengthMatch("Joe", 2));
            Console.WriteLine(_02_10.doesLengthMatch("Joe", 3));
            Console.WriteLine(_02_10.getFullName("Joe", "Santos"));
        }
    }
}