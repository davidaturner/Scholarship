package com.javabrains._1.dependencyinjection;

public class Application_DI {

	public static void main(String[] args) {

		// TO-DO convert to DrawingShapesFactory for shape instantiation.
		Shape shape = new Triangle();
		DrawingClass dc = new DrawingClass();
		dc.setShape(shape);
		dc.draw();

	}

}
