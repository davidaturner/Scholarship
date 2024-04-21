package _502;

public class Doubling {

	public static void main(String[] args) {

		int myIntValue = 5 / 3;
		float myFloatValue = 5f /3f;
		double myDoubleValue = 5.00 / 3.00;
		System.out.println("MyIntValue= " + myIntValue);
		System.out.println("MyFloatValue= " + myFloatValue);
		System.out.println("MyDoubleValue= " + myDoubleValue);
		
//		double is the default type for .00.
//		float use is not recommended.
		
		double onepound = 0.45359237; // kilograms
		
		double poundsToBeConverted =  200d;
		double kilogramsConverted = poundsToBeConverted * onepound;
		System.out.println("Kilograms= " + kilogramsConverted);
		
		double pi = 3.1415927d;
		double alternatepi = 3.141_592_7d;
		System.out.println(pi);
		System.out.println(alternatepi);
		
//		BigDecimal is used with precision number calculation is REQUIRED.
	}

}
