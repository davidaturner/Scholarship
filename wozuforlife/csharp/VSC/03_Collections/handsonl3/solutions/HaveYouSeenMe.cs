using System;

namespace handsonl3.solutions
{

    class HaveYouSeenMe
    {

        public void runSolution1()
        {
            // Console.WriteLine("Running Solution 01...");
            // string[] theBeatles = { "John", "George", "Paul", "Ringo" };
            // Console.WriteLine(theBeatles.Length);
            string[] thisIsMe = { "Emily", "Harry", "Rupert",
                                    "Clara", "Lily", "Michael"};
            for (int i = 0; i < thisIsMe.Length; i++)
            {
                // string newString;
                // newString = String.Format("There are {0} cats in my {1} 
                // and no {2}", 2, "house", "dogs");
                // System.Console.WriteLine(newString);
                Console.WriteLine(String.Format("Have you seen {0}?",
                                    thisIsMe[i]));
            };
            Console.WriteLine("___________");
            for (int j = thisIsMe.Length - 1; j >= 0; j--)
            {
                Console.WriteLine(String.Format("Have you seen {0}?",
                                    thisIsMe[j]));
            }
        }
    }
}