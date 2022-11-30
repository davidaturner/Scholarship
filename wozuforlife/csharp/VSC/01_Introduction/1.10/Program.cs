using System;

namespace _1._10
{
    class Program
    {
        static bool isBool(int number)
        {

            bool isUno = (number == 1);
            return isUno;
        }

        static bool checkEverything(bool bool1)
        {
            bool isTrue = (bool1 == true);

            return isTrue;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Console.WriteLine(isBool(0));
            Console.WriteLine(isBool(1));

            bool bool1 = false;
            Console.WriteLine(checkEverything(bool1));
            bool1 = true;
            Console.WriteLine(checkEverything(bool1));
        }
    }
}
