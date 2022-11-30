using System;

namespace _1._9
{
    class Program
    {
        static void isTooOpen()
        {
            bool isOpen = true;

            if (isOpen == true)
            {
                Console.WriteLine("Yay!");
            }
            else
            {
                Console.WriteLine("Sad day");
            }
        }

        static void isNotOpen()
        {
            bool isOpen = false;

            if (isOpen)
            {
                Console.WriteLine("Yay!");
            }
            else
            {
                Console.WriteLine("Sad day");
            }

        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            isNotOpen();
            isTooOpen();
        }
    }
}
