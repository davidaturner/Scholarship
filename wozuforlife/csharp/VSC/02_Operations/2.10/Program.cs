using System;

namespace _2._10
{
    class Program
    {
        static String FullName(String firstname, String lastname)
        {
            String fullname = firstname + " " + lastname;
            return fullname;
        }

        static bool DoesLengthWatch(String source, int count)
        {
            bool lengthMatches = (source.Length == count);
            return lengthMatches;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(FullName("Joe", "Santos"));
            Console.WriteLine(FullName("Paul", "Long"));
            Console.WriteLine(DoesLengthWatch("Dog", 2));
            Console.WriteLine(DoesLengthWatch("Dog", 3));
        }
    }
}
