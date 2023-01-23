using System;

namespace lessons
{
    class _03_02
    {
        static public void theBoys()
        {
            var beatle1 = "John";
            var beatle2 = "George";
            var beatle3 = "Paul";
            var beatle4 = "Ringo";
            Console.WriteLine(beatle1);
            Console.WriteLine(beatle2);
            Console.WriteLine(beatle3);
            Console.WriteLine(beatle4);

            var theBeatles = new string[] {"John", "George", "Paul", "Ringo"};
            // string[] theBeatles = new string[] {"John", "George", "Paul", "Ringo"};
            Console.WriteLine(theBeatles);
            Console.WriteLine(theBeatles[0]);
            Console.WriteLine(theBeatles[3]);

            Console.WriteLine(theBeatles.Length);
        }

        static public void theGroceries() {

            string[] groceryList = new String[4];
            groceryList[0] = "bread";
            groceryList[1] = "eggs";
            groceryList[2] = "milk";
            groceryList[3] = "tea";
            Console.WriteLine(groceryList[1]);            
            groceryList[1] = "beans";
            Console.WriteLine(groceryList[1]);

        }

        static public void run() {

            theBoys();
            theGroceries();
            
            int[] highestArizonaTemperatures = {120, 122, 121, 118, 119};
            Console.WriteLine(highestArizonaTemperatures[0]);
            Console.WriteLine(highestArizonaTemperatures[4]);
        }
    }
}