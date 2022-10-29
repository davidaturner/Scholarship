package com.javabrains._1.dependencyinjection;

public class DrawingShapesFactory {

	
	public static String SHAPE_TRIANGLE = "triangle";
	public static  String SHAPE_CIRCLE = "circle";
	
	public static Shape getShape(String descriptor) {
		
		if (descriptor.equals("triangle")) {
			return new Triangle();
		}
		
		if (descriptor.equals("circle")) {
			return new Circle();
		}
		
		return null;
	}
	
	public static void main(String[] args) {

		Shape shape = DrawingShapesFactory.getShape(DrawingShapesFactory.SHAPE_CIRCLE);
		if (shape != null) {
			shape.draw();
		}
	
		shape = DrawingShapesFactory.getShape(DrawingShapesFactory.SHAPE_TRIANGLE);
		if (shape != null) {
			shape.draw();
		}

	}

}
