using System;

namespace handsonl4.solutions
{

    class DoubleMe
    {

        public int doubleMe(int value)
        {
            return value * 2;
        }

        public int quadrupleMe(int value)
        {
            return doubleMeManyTimes(value, 2);
        }

        public int doubleMeManyTimes(int value, int numberOfTimes)
        {
            int result = value;
            for (int i = 0; i < numberOfTimes; i++)
            {
                result = doubleMe(result);
            }
            return result;
        }
    }
}