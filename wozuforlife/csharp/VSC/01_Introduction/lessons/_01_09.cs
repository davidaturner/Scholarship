using System;

namespace lessons
{
    class _01_09 {

        static public void ifOpenthen(bool isOpen)
        {
            // bool isOpen = true;

            if (isOpen)
            {
                Console.WriteLine("Yay!");
            }
            else
            {
                Console.WriteLine("Sad day");
            }
        }

        static public void run()
        {
            _01_09.ifOpenthen(false);
            _01_09.ifOpenthen(true);
            // Console.WriteLine("Hello World!");
        }
    }
}