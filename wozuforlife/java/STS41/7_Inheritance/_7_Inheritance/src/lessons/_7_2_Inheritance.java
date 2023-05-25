package lessons;

public class _7_2_Inheritance {

	public static void main(String[] args) {

		inheritance();
		polymorphism();
	}
	
	public static void inheritance() {
		
	    Vehicle vehicle = new Vehicle("AcmeVehicle", "Gray", 5);
	    vehicle.printDetails();

	    Car car = new Car("AcmeCar", "Black", 15, 10);
	    car.printDetails();

	    Truck truck = new Truck("AcmeTruck", "White", 25, 20);
	    truck.printDetails();
	}
	
	public static void polymorphism() {
		
	    Vehicle vehicle = new Vehicle("AcmeVehicle", "Gray", 5);
	    printVehicleColor(vehicle);

	    Car car = new Car("AcmeCar", "Black", 15, 10);
	    printVehicleColor(car);

	    Truck truck = new Truck("AcmeTruck", "White", 25, 20);
	    printVehicleColor(truck);

	    Vehicle[] vehicles = { vehicle, car, truck };
	    printTotalFuelLevel(vehicles);
	}
	
	public static class Vehicle {
	    String make;
	    String color;
	    boolean isRunning;
	    int fuelLevel;

	    public Vehicle(String make, String color, int fuelLevel) {
	        this.make = make;
	        this.color = color;
	        this.isRunning = false;
	        this.fuelLevel = fuelLevel;
	    }

	    public void printDetails() {
	        System.out.println("The " + this.color + " " + this.make + " has a fuel level of " + this.fuelLevel + ". Is it running? " + this.isRunning);
	    }
	}
	
	public static void printVehicleColor(Vehicle v) {
	    String vehicleColor = v.color;
	    System.out.println(vehicleColor);
	}
	
	public static void printTotalFuelLevel(Vehicle[] vehicles) {
	    int total = 0;
	    for(Vehicle v : vehicles) {
	        total += v.fuelLevel;
	    }
	    System.out.println(total);
	}
	
	public static class Car extends Vehicle {
	    int trunkWidth;

	    public Car(String make, String color, int fuelLevel, int trunkWidth) {
	        super(make, color, fuelLevel);
	        this.trunkWidth = trunkWidth;
	    }
	}
	
	public static class Truck extends Vehicle {
	    int flatbedLength;

	    public Truck(String make, String color, int fuelLevel, int flatbedLength) {
	        super(make, color, fuelLevel);
	        this.flatbedLength = flatbedLength;
	    }
	}

}
