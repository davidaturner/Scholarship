using System;

namespace _1._5
{
    /*
    When you want to associate a variable with a piece of data, you need to tell C# 
    what type of data it is. Below is a list of a few common data types:

    int - A whole number such as 0, 42, and -123.
    float - A decimal number such as 221.54 or .006
    string - A group of characters such as a word or sentence, located within quotes.
    For example: "The fox jumped over the fence."
    bool - A value that is either true or false. Bool is short for "boolean," 
    and the default value is false.

    There are many more data types from which to choose. In this section, you will 
    learn about the most common.
    */
    class Program
    {
        public static String helloworld()
        {
            return "Hello, World!";
        }

        static void Main(string[] args)
        {
            Console.WriteLine(helloworld());  // string
            Console.WriteLine(-123);            // int
            Console.WriteLine(2.34F);           // float
            Console.WriteLine(5.2);            // double
            Console.WriteLine(true);            // bool

            int studentsEnrolled;
            studentsEnrolled = 122;
            Console.WriteLine(studentsEnrolled);
        }
    }
}
