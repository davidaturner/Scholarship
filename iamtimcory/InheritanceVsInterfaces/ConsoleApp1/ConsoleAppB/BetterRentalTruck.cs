using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppB
{
    class BetterRentalTruck : LandVehicle, IRentalProperty
    {
        public TruckType Style { get; set; }

        public int RentalId { get; set; }
        public string CurrentRenter { get; set; }
        public decimal RentPerDay { get; set; }
    }
}
