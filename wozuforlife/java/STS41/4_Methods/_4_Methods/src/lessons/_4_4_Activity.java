package lessons;

public class _4_4_Activity {

	public static void main(String[] args) {

		activity1();
		activity2();
	}
	
	public static void activity1() {
		
//		In the StudentCode class, add a public static method named greetMe:
//
//			It should have one String parameter named name.
//			It should return a String value. That value should be "Hello, " plus the value of the 
//			name parameter.
//			For instance, if the name were Adam, the result would be "Hello, Adam".
		System.out.println(greetMe("Adam"));
	}
	
	public static String greetMe(String name) {
		return "Hello, " + name;
	}
	
	public static void activity2() {
		
//		In the StudentCode class, add a public method named getAverage:
//
//			It should have one parameter named numbers that is an array of doubles.
//			It should return a double, whose value will be the average of all of the values in the 
		// numbers array.
//			TIP! Never divide by zero! For this exercise, return the value 0.0 if a division by zero 
		// will occur.		
		double[] numbers = { 1.2, 2.3, 3.4, 4.5, 5.6 };
		
		System.out.println(getAverage(numbers));
	}
	
	public static double getAverage(double[] numbers) {
		double result = 0;
		if (numbers.length == 0) {
			return 0.0;
		}
		for(double val : numbers) {
			
			result += val;
		}
		return result / numbers.length;
	}

}
