package lessons;


public class _8_5_Generics {

	public static void main(String[] args) {

		vehicleExample();
//		boxExample();
		correctedBoxExample();
	}
	
	public static void vehicleExample() {
		
//		Casting is the concept of converting from one data type to another. The object on the 
//		right-hand side of the = sign is converted into the object on the left-hand side with the 
//		help of parenthesis containing the type. In the previous lesson, the classes Vehicle, Car, and 
//		Truck were created to illustrate inheritance, where Car and Truck inherit from the Vehicle class.
				
		// parameters: make, color, fuel level, trunk width
		Car car = new Car("2021 Honda Accord", "Blue", 10, 555);

		// casting a Car object to a Vehicle object
		Vehicle vehicle = (Vehicle)car;	
		System.out.println(vehicle.make);
		System.out.println(vehicle.color);
		System.out.println(vehicle.fuelLevel);
		vehicle.printDetails();
	}
	
	public static void boxExample() {
		
//		The code below simulates a runtime error when attempting to cast. Casting errors are usually 
//		not caught until the application is running and fails
		
		// main
		// attempting to vehicle functionality... from a square.
		Square square = new Square(4.0f);
		Box box = new Box();
		box.set(square);
		
		// class cast exception.
		Vehicle vehicle = (Vehicle) box.get();
		vehicle.printDetails();
	}
	
	public static void correctedBoxExample() {
		
		GenericBox<Square> boxOfSquares = new GenericBox<Square>();
		boxOfSquares.set(new Square(4.0f));
		
		// class cast exception. BUT now occurs during compile time, not run time.
//		Vehicle vehicle = (Vehicle) boxOfSquares.get();
//		vehicle.printDetails();
		System.out.println(boxOfSquares.get().area());
	}
	
	public static class Vehicle {
		
		public String make;
		public String color;
		public int fuelLevel;
		
		public Vehicle(String make, String color, int fuelLevel) {
			this.make = make;
			this.color = color;
			this.fuelLevel = fuelLevel;
		}
		
		public void printDetails() {
			
			System.out.println("My car is a " + color + " " + make + ".");
		}
	}
	
	public static class Car extends Vehicle {
		public int trunkWidth;
		
		public Car(String make, String color, int fuelLevel, int trunkWidth) {

			super(make, color, fuelLevel);
			this.trunkWidth = trunkWidth;
		}
	}

	public static class Box {
	    private Object object;

	    public void set(Object object) { this.object = object; }
	    public Object get() { return object; }
	}

	public static class GenericBox<T> {
	    private T t;

	    public void set(T t) { this.t = t; }
	    public T get() { return t; }
	}
	
	public interface Shape {
		
		float area();
	}
	
	public static class Square implements Shape {

		public float length;	
		public Square(float length) {
			
			this.length = length;
		}
		
		@Override
		public float area() {
			return length * length;
		}		
	}
	
}

