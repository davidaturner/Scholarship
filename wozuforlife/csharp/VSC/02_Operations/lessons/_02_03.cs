using System;

namespace lessons
{
    class _02_03
    {
        static public void equality(int b)
        {
            int a = 5;
            // int b = 6;
            bool result = (a == b);
            Console.WriteLine(result);
            // Console.WriteLine(a == b);
        }

        static public void run()
        {

            _02_03.equality(4);
            _02_03.equality(5);
            _02_03.equality(6);

        }
    }
}