using System;

namespace _2._5
{

    class Program
    {
        static void GoToRestaurant()
        {
            var isHungry = true;
            var isRestaurantOpen = true;

            if (isHungry && isRestaurantOpen)
            {
                Console.WriteLine("Go to the restaurant!");
            }
            else
            {
                Console.WriteLine("Don't go to the restaurant.");
            }
        }

        static void StayAtLibrary()
        {
            var isSleepy = false;
            var isLibraryClosed = true;

            if (isSleepy || isLibraryClosed)
            {
                Console.WriteLine("You should leave now.");
            }
            else
            {
                Console.WriteLine("Keep on studying!");
            }
        }

        static void TimeToEat()
        {
            var isDaytime = false;
            var isHungry = false;

            if (!(isDaytime && isHungry))
            {
                Console.WriteLine("Don't eat.");
            }
            else
            {
                Console.WriteLine("Time to eat!");
            }
        }

        static void StayAtLibrary2()
        {
            var isSleepy = true;
            var isLibraryClosed = false;
            var isBatteryDead = false;

            if (isBatteryDead || isSleepy && isLibraryClosed)
            // if (isBatteryDead || isSleepy || isLibraryClosed)
            {
                Console.WriteLine("You should leave now.");
            }
            else
            {
                Console.WriteLine("Keep on studying!");
            }
        }

        static void IsLessThan(int a, int b)
        {
            if (a < b)
            {
                Console.WriteLine("a is less than b");
            }
            else
            {
                Console.WriteLine("a is not less than b");
            }
        }

        static void IsLessThanEqualsTo()
        {
            var a = 4;
            var b = 4;

            if (a < b)
            {
                Console.WriteLine("a is less than b");
            }
            else if (a <= b)
            {
                Console.WriteLine("a is the same as b");
            }
            else
            {
                Console.WriteLine("a is not less than b");
            }
        }

        static void IsGreaterThan()
        {
            var userAge = 22;

            if (userAge < 18)
            {
                Console.WriteLine("Sorry, you are too young to purchase tickets for this movie.");
            }
            else if (userAge >= 18)
            {
                Console.WriteLine("Here are your tickets. Enjoy the movie!");
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            GoToRestaurant();
            StayAtLibrary();
            TimeToEat();
            StayAtLibrary2();
            IsLessThan(4, 6);
            IsLessThan(6, 6);
            IsLessThan(17, 6);
            IsLessThanEqualsTo();
            IsGreaterThan();
        }
    }
}
