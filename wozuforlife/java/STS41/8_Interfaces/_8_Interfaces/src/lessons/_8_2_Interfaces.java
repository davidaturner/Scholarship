package lessons;

public class _8_2_Interfaces {

	public static void main(String[] args) {
		
		float squareLength = 3f;
		Square sq = new Square(squareLength);
		float squareArea = sq.area();
		System.out.println(squareArea);

		float circleRadius = 4f;
		Circle cir = new Circle(circleRadius);
		float circleArea = cir.area();
		System.out.println(circleArea);

	}

	public interface Shape {
	    float area();
	}
	
	public static class Square implements Shape {
	    float length;

	    // overloaded constructor
	    public Square(float length) {
	        this.length = length;
	    }

	    // interface method
	    public float area() {
	        // area = length * length
	        return length * length;
	    }
	}
	
	public static class Circle implements Shape {
	    float radius;

	    public Circle(float radius) {
	        this.radius = radius;
	    }

	    public float area() {
	        // area = 3.14 * radius * radius
	        return 3.14f * radius * radius;
	    }
	}
}
