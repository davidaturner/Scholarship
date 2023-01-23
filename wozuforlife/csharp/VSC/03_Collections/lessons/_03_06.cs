using System;

namespace lessons
{
    class _03_06
    {
        static public void run()
        {
            for(int count = 10; count > 0; count--){
                Console.WriteLine(count);
            }

            Console.WriteLine("Lift Off!");

            // int count = 10; // causes an error. used in an enclosed local scope
            int c = 10;

            for(; c > 0; c--){
                Console.WriteLine(c);
            }

            Console.WriteLine("Lift Off!");    

            string[] myArray = {"Albert", "Kirsten", "Hester", "Henry"};
            for (int i = 0; i < myArray.Length; i++)
            {
                Console.WriteLine(myArray[i] + ", hello!");
            } 
            // Console.WriteLine("Hello World!");
        }
    }
}