using System;

namespace _2._6
{
    class Program
    {
        static void CheckEverything(bool bool1, bool bool2, bool bool3)
        {

            bool isAllTrue = false;
            if (bool1 && bool2 && bool3)
            {
                isAllTrue = true;
            }
            Console.WriteLine(isAllTrue);
        }

        static void StudentCanWatch(int age, bool withParent)
        {

            bool canWatch = false;
            if (age >= 18 || (age >= 13 && withParent))
            {
                canWatch = true;
            }
            Console.WriteLine(canWatch);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            CheckEverything(false, false, false);
            CheckEverything(false, false, true);
            CheckEverything(false, true, false);
            CheckEverything(true, true, false);
            CheckEverything(true, true, true);
            StudentCanWatch(7, false);
            StudentCanWatch(7, true);
            StudentCanWatch(13, false);
            StudentCanWatch(13, true);
            StudentCanWatch(18, false);
            StudentCanWatch(18, true);
        }
    }
}
