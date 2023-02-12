using System;

namespace lessons
{
    class _07_03
    {
        public static void run()
        {
            Vehicle newVehicle = new Vehicle("AcmeVehicle", "Gray", 5);
            Vehicle.printVehicleColor(newVehicle);

            Car newCar = new Car("AcmeCar", "Black", 15, 10);
            Vehicle.printVehicleColor(newCar);

            Truck newTruck = new Truck("AcmeTruck", "White", 25, 20);
            Vehicle.printVehicleColor(newTruck);
        }
    }
}