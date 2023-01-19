using System;

namespace lessons
{
    class _01_10 {

        static public bool isBool(int number1)
        {
            bool isUno;

            if (number1 == 1) {
                isUno = true;
            }
            else {
                isUno = false;
            }
            return isUno;
        }

        static public bool checkEverything(bool bool1)
        {
            bool isTrue;

            if (bool1 == true) {
                isTrue = true;
            }
            else {
                isTrue = false;
            }

            return isTrue;
        }

        static public void run()
        {
            Console.WriteLine(_01_10.isBool(0));
            Console.WriteLine(_01_10.isBool(1));
            Console.WriteLine(_01_10.checkEverything(false));
            Console.WriteLine(_01_10.checkEverything(true));
            // Console.WriteLine("Hello World!");
        }
    }
}
