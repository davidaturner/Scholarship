using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppB
{
    public class LandVehicle : IPoweredByKeyProperty
    {
        public int PassengerCapacity { get; set; }

        public void StartEngine()
        {
            Console.WriteLine("Put the key into the ignition slot.");
            Console.WriteLine("Turn the key to the ON position.");
        }

        public void StopEngine()
        {
            Console.WriteLine("Turn the key to the OFF position.");
        }
    }
}
