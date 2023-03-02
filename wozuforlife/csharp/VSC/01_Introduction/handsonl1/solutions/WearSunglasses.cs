
using System;

namespace handsonl1.solutions
{

    class WearSunglasses
    {
        public void runSol01(bool isSunny)
        {
            string wear = "Wear sunglasses!";
            string dontwear = "You don't need to wear sunglasses.";

            // If it is sunny outside, print "Wear sunglasses!".If it 
            // is anything else, print "You don't need to wear sunglasses."
            if (isSunny)
            {
                Console.WriteLine(wear);
            }
            else
            {
                Console.WriteLine(dontwear);
            }
        }

        public void runSol01()
        {
            bool isSunny = true;
            string wear = "Wear sunglasses!";
            string dontwear = "You don't need to wear sunglasses.";

            // If it is sunny outside, print "Wear sunglasses!".If it 
            // is anything else, print "You don't need to wear sunglasses."
            if (isSunny)
            {
                Console.WriteLine(wear);
            }
            else
            {
                Console.WriteLine(dontwear);
            }
        }

        public void runSol02()
        {
            bool isSunny = true;
            bool atBeach = true;
            string sunblock = "Sunblock is a good idea.";
            string noSunblock = "Sunblock isn't needed.";

            // Add another if-else statement that will execute if the 
            // variable isSunny is true(you already created that if-else 
            // statement in Part 1). If isSunny is false, this new if-else 
            // will not be executed. This new if-else statement will check 
            // if the variable atBeach is true / false.
            // If it is true, print "Sunblock is a good idea."
            // If it is false, print "No need to wear sunblock."

            if (isSunny)
            {
                runSol01(isSunny);
                if (atBeach)
                {
                    Console.WriteLine(sunblock);
                }
                else
                {
                    Console.WriteLine(noSunblock);
                }
            }
        }

        public void runSol03()
        {
            bool isSunny = false;
            bool goAnyway = true;
            string going = "Awesome! Glad you don't mind clouds!";
            string nextTime =
                "No worries! Hopefully next time we will have some sun!";

            // Add another if-else statement that will execute if the 
            // variable isSunny is false.This new if-else statement should 
            // check if the variable goAnyway is true.
            // If it is true, print "Awesome! Glad you don't mind clouds!"
            // If it is false, print "No worries! Hopefully next time 
            // we will have some sun!"
            if (!isSunny)
            {
                runSol01(isSunny);
                if (goAnyway)
                {
                    Console.WriteLine(going);
                }
                else
                {
                    Console.WriteLine(nextTime);
                }
            }
        }
    }
}

