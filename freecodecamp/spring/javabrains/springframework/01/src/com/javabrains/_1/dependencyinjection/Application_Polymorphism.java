package com.javabrains._1.dependencyinjection;

public class Application_Polymorphism {

	public static void main(String[] args) {
		
		Shape shape = new Circle();
		shape.draw();
		
		shape = new Triangle();
		shape.draw();

	}

}
