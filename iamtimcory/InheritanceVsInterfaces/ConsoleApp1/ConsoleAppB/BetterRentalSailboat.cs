using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppB
{
    class BetterRentalSailboat : WaterVehicle, IRentalProperty
    {
        public BoatType Style { get; set; }

        public int RentalId { get; set; }
        public string CurrentRenter { get; set; }
        public decimal RentPerDay { get; set; }
    }
}
