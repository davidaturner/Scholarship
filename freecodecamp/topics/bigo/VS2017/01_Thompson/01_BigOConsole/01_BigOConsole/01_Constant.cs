using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_BigOConsole
{
    // BigO is Constant.

    public class _01_Constant
    {
        public class MultiplyThingsByTimeItTakesToDoOneThing
        {
            public int NumberOfThings { get; set; }
            public int MinutesToDoOneThing { get; set; }

            public MultiplyThingsByTimeItTakesToDoOneThing(int numberOfThings, int minutesToDoOneThing)
            {
                NumberOfThings = numberOfThings;
                MinutesToDoOneThing = minutesToDoOneThing;
            }

            public int CalculateTotalTime()
            {
                Console.WriteLine("Number of Things: " + NumberOfThings);           // O(1)
                Console.WriteLine("MinutesToDoOneThings: " + MinutesToDoOneThing);  // O(1)
                int something = NumberOfThings * MinutesToDoOneThing;               // O(1)
                Console.WriteLine("Something: " + something);                       // O(1)
                return something;
            }
        }


    }
}
