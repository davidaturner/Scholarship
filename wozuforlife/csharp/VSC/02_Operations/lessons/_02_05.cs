using System;

namespace lessons
{
    class _02_05
    {
        static public void resolveIfHungry(bool isHungry)
        {
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

        static public void resolveIfSleepy(bool isSleepy, bool isLibraryClosing)
        {
            if (isSleepy || isLibraryClosing)
            {
                Console.WriteLine("You should leave now.");
            }
            else
            {
                Console.WriteLine("Keep on studying!");
            }
        }

        static public void resolveIfStillHungry(bool isHungry, bool isDaytime)
        {
            if (!(isDaytime && isHungry))
            {
                Console.WriteLine("Don't eat.");
            }
            else
            {
                Console.WriteLine("Time to eat!");
            }
        }

        static public void resolveIfStillSleepy(bool isSleepy, bool isLibraryClosing,
                                                bool coffeeAvailable)
        {
            if (isLibraryClosing || (isSleepy && !coffeeAvailable))
            {
                Console.WriteLine("You should leave now.");
            }
            else
            {
                Console.WriteLine("Keep on studying!");
            }
        }

        static public void checkIfLessThanOrEqualTo(int a, int b)
        {
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

        static public void run()
        {
            _02_05.resolveIfHungry(false);
            _02_05.resolveIfHungry(true);
            _02_05.resolveIfSleepy(false, false);
            _02_05.resolveIfSleepy(false, true);
            _02_05.resolveIfSleepy(true, false);
            _02_05.resolveIfSleepy(true, true);
            _02_05.resolveIfStillHungry(false, false);
            _02_05.resolveIfStillHungry(false, true);
            _02_05.resolveIfStillHungry(true, false);
            _02_05.resolveIfStillHungry(true, true);
            _02_05.resolveIfStillSleepy(false, false, false);
            _02_05.resolveIfStillSleepy(false, false, true);
            _02_05.resolveIfStillSleepy(false, true, false);
            _02_05.resolveIfStillSleepy(false, true, true);
            _02_05.resolveIfStillSleepy(true, false, false);
            _02_05.resolveIfStillSleepy(true, false, true);
            _02_05.resolveIfStillSleepy(true, true, false);
            _02_05.resolveIfStillSleepy(true, true, true);
            _02_05.checkIfLessThanOrEqualTo(3, 4);
            _02_05.checkIfLessThanOrEqualTo(4, 4);
            _02_05.checkIfLessThanOrEqualTo(12, 4);

        }
    }
}