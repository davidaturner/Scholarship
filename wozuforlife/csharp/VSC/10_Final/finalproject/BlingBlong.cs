using System;

namespace games
{

    class BlingBlong
    {

        public void run(int limitValue)
        {
 
            for(int i =  1; i < limitValue+1; i++) {

                if (chooseBlingBlong(i)) {
                    Console.WriteLine("BlingBlong");
                } else if (chooseBling(i)) {
                    Console.WriteLine("Bling");
                } else if (chooseBlong(i)) {
                    Console.WriteLine("Blong");
                } else {
                    Console.WriteLine(i);
                }
            }

        }

        private bool chooseBling(int number) {
            return (number % 3 == 0);
        }

        private bool chooseBlong(int number) {
            return (number % 5 == 0);
        }

        private bool chooseBlingBlong(int number) {
            return chooseBling(number) && chooseBlong(number);
        }
    }
}