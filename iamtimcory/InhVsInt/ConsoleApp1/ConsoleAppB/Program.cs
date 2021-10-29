using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppB
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Building the available Rentals list.");

            List<IRentalProperty> rentals = new List<IRentalProperty>();

            rentals.Add(new BetterRentalCar());

            rentals.Add(new BetterRentalTruck());

            rentals.Add(new BetterRentalBoat());

            rentals.Add(new BetterRentalSailboat());

            Console.WriteLine("\r\nNumber of available Rentals: " + rentals.Count);
            Console.WriteLine("\r\nDONE!");

            Console.ReadLine();

        }
    }
}
