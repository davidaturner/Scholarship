using System;

namespace lessons
{
    class _02_06
    {
        static public bool checkEverything(bool bool1, bool bool2, bool bool3)
        {
            bool isAllTrue = bool1 && bool2 && bool3;
            return isAllTrue;
        }

        static public bool canWatch(int age, bool withParents)
        {
            bool canWatch = age >= 18 || (age < 18 && withParents);
            return canWatch;
        }

        static public void run()
        {
            Console.WriteLine(_02_06.checkEverything(false, false, false));
            Console.WriteLine(_02_06.checkEverything(true, true, true));
            Console.WriteLine(_02_06.canWatch(12, false));
            Console.WriteLine(_02_06.canWatch(12, true));
            Console.WriteLine(_02_06.canWatch(65, false));
            Console.WriteLine(_02_06.canWatch(45, true));
        }
    }
}