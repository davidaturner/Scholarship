package com.wozu._2.vehicles;

public class Truck extends Vehicle {
    int flatbedLength;

    public Truck(String make, String color, int fuelLevel, int flatbedLength) {
        super(make, color, fuelLevel);
        this.flatbedLength = flatbedLength;
    }
    
	public static void main(String[] args) {

		Truck carlos = new Truck("Chevy", "White", 14, 2);
		System.out.println(carlos.make);
	}
}
//public class Truck {
//
//    public String make;
//    public String color;
//    public boolean isRunning;
//    public int fuelLevel;
//    public int flatbedLength;
//
//    public Truck(String make, String color, int fuelLevel, int flatbedLength) {
//        this.make = make;
//        this.color = color;
//        this.isRunning = false;
//        this.fuelLevel = fuelLevel;
//        this.flatbedLength = flatbedLength;
//    }
//	
//	public static void main(String[] args) {
//
//		Truck carlos = new Truck("Chevy", "White", 14, 2);
//		System.out.println(carlos.make);
//	}
//
//}
