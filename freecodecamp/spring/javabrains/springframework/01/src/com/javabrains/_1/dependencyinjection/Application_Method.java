package com.javabrains._1.dependencyinjection;

public class Application_Method {

	public void myDrawMethod(Shape shape) {
		shape.draw();
	}
	
	public static void main(String[] args) {

		Application_Method app = new Application_Method();
		Shape shape = new Triangle();
		app.myDrawMethod(shape);
	}

}
