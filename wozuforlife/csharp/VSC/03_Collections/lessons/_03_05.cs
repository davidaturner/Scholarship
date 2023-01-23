using System;

namespace lessons
{
    class _03_05
    {
        static public void run()
        {
            int myNumber = 1;

            // while
            while (myNumber < 10)
            {
                Console.WriteLine(myNumber);
                myNumber++;
            }

            myNumber = 1;

            // do while
            do
            {
                Console.WriteLine("A" + myNumber);
                myNumber++;
            } while (myNumber < 10);

            // Console.WriteLine("Hello World!");
        }
    }
}