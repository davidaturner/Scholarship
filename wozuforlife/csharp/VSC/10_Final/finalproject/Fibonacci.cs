using System;

namespace games
{

    class FibonacciSequence
    {

        public void run(int limitVal)
        {
            for(int i = 0; i <= limitVal; i++) {
                Console.WriteLine(getFibonacciValue(i));
            }
        }

        private int getFibonacciValue(int value) {
            if (value == 0 || value == 1) {
                return value;
            } else if (value >= 2) {
                return getFibonacciValue(value - 1) + getFibonacciValue(value -2);
            }
            else return -1;
        }

    }
}