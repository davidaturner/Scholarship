using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class BadRentalVehicle
    {
        public long RentalId { get; set; }
        public string CurrentRenter { get; set; }
        public decimal RentPerDay { get; set; }
        public int NumberOfPassengers { get; set; }
//        public CarType Style { get; set; }

//        public void StartEngine()
        public virtual void StartEngine()
        {
            Console.WriteLine("\r\nPut key into the ignition slot.");
            Console.WriteLine("Turn the key to the ON position.");
        }

//        public void StopEngine()
        public virtual void StopEngine()
        {
            Console.WriteLine("\r\nTurn the key to the OFF position.");
        }
    }
}
