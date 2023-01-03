package com.wozu._2.vehicles;

public class Car extends Vehicle {
    int trunkWidth;

    public Car(String make, String color, int fuelLevel, int trunkWidth) {
        super(make, color, fuelLevel);
        this.trunkWidth = trunkWidth;
    }
    
	public static void main(String[] args) {
		Car marvin = new Car("Chevy", "Fern", 8, 14);
		System.out.println(marvin.make);
	}
}
//public class Car {
//
//    public String make;
//    public String color;
//    public boolean isRunning;
//    public int fuelLevel;
//    public int trunkWidth;
//
//    public Car(String make, String color, int fuelLevel, int trunkWidth) {
//        this.make = make;
//        this.color = color;
//        this.isRunning = false;
//        this.fuelLevel = fuelLevel;
//        this.trunkWidth = trunkWidth;
//    }
//
//	
//	public static void main(String[] args) {
//		Car marvin = new Car("Chevy", "Fern", 8, 14);
//		System.out.println(marvin.make);
//
//	}
//
//}
