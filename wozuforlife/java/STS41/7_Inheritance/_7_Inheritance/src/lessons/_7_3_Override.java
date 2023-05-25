package lessons;

public class _7_3_Override {

	public static class Vehicle {
	    String make;
	    String color;
	    boolean isRunning;
	    int fuelLevel;
	    
//	    The code below would be for the Vehicle class, assuming it had an added attribute for the license 
//	    plate of the vehicle. The code below implements the hash code using the license plate of the 
//	    vehicle as the unique key.
		String licensePlate;

	    public Vehicle(String model, String color, int fuelLevel) {
	        this.make = model;
	        this.color = color;
	        this.isRunning = false;
	        this.fuelLevel = fuelLevel;
	    }

	    public void printDetails() {
	        System.out.println("The " + this.color + " " + this.make + " has a fuel level of " + 
	        						this.fuelLevel + ". Is it running? " + this.isRunning);
	    }

//	    After the method is prepended with the final keyword (as seen in the code below), any attempts 
//	    to override the method will result in an error. Eclipse will suggest removing "the final modifier" 
//	    from the parent class for it to be overridden in the child class.
	    final public void start() {
	        isRunning = true;
	    }
	    
	    @Override
	    public int hashCode() {
	        // convert the String license plate to an integer
	        int hash = Integer.decode(this.licensePlate);
	        return hash;
	    }
	}
	
	public static class Car extends Vehicle {
	    int trunkWidth;

	    public Car(String make, String color, int fuelLevel, int trunkWidth) {
	        super(make, color, fuelLevel);
	        this.trunkWidth = trunkWidth;
	    }

	    @Override
	    public void printDetails() {
	        System.out.println("The " + this.color + " " + this.make + " has a trunk width of " + 
	        				this.trunkWidth + " and has a fuel level of " + this.fuelLevel + 
	        				". Is it running? " + this.isRunning);
	    }
	}
	
	public static class Truck extends Vehicle {
	    int flatbedLength;

	    public Truck(String make, String color, int fuelLevel, int flatbedLength) {
	        super(make, color, fuelLevel);
	        this.flatbedLength = flatbedLength;
	    }

	    @Override
	    public void printDetails() {
	        System.out.println("The " + this.color + " " + this.make + " has a flatbed length of " + 
	        			this.flatbedLength + " and a fuel level of " + this.fuelLevel + 
	        			". Is it running? " + this.isRunning);
	    }
	}

	public static void main(String[] args) {
		override();

	}
	
	public static void override() {
	    Vehicle vehicle = new Vehicle("AcmeVehicle", "Gray", 5);
	    vehicle.printDetails();

	    Car car = new Car("AcmeCar", "Black", 15, 10);
	    car.printDetails();

	    Truck truck = new Truck("AcmeTruck", "White", 25, 20);
	    truck.printDetails();
	}

}
