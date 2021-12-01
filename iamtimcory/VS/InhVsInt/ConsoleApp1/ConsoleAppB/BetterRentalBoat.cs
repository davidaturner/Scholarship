using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppB
{
    class BetterRentalBoat : WaterVehicle, IRentalProperty, IPoweredByKeyProperty
    {
        public BoatType Style { get; set; }

        public int RentalId { get; set; }
        public string CurrentRenter { get; set; }
        public decimal RentPerDay { get; set; }

        public void StartEngine()
        {
            Console.WriteLine("Put the key into the ignition key.");
            Console.WriteLine("Turn the key to the ON position.");
        }

        public void StopEngine()
        {
            Console.WriteLine("Turn the key to the OFF position.");
        }
    }
}
