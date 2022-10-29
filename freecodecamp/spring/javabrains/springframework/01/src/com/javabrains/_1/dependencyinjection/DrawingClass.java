package com.javabrains._1.dependencyinjection;

public class DrawingClass {

	private Shape shape;
	
	public void setShape(Shape shape) {
		this.shape = shape;
	}
	
	public void draw() {
		shape.draw();
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
