using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppB
{
    public class BetterRentalCar : LandVehicle, IRentalProperty
    {
        public CarType Style { get; set; }

        public int RentalId { get; set; }
        public string CurrentRenter { get; set; }
        public decimal RentPerDay { get; set; }
    }
}
