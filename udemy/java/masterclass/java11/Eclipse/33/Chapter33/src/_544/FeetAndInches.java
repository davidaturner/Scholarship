package _544;

public class FeetAndInches {

	public static boolean validate(int feet, int inches) {
		boolean feetValid = (feet * 12) >= 0;
		boolean inchesValid = inches >= 0 && inches <= 12;
		
//		if ( !feetValid) {
//			System.out.println("Invalid feet: " + feet);
//		}
//		if ( !inchesValid) {
//			System.out.println("Invalid inches: " + inches);
//		}		
		return (feetValid && inchesValid);
	}
	
	public static double calculateCentimeters(int feet, int inches) {
		if (!validate(feet, inches)) {
			System.out.println("Invalid parameters.");
			return -1;
		}
		double centimeters = (feet * 12 + inches) * 2.54;
		System.out.println (feet + " feet and " + inches + " inches = " + centimeters + " centimeters.");			
		return centimeters;
	}

	public static double calculateCentimeters(int inches) {

		int feet = (int)inches / 12;		
		int remainder = inches % 12;
//		return calculateCentimeters((int)inches / 12, inches % 12);
		return calculateCentimeters(feet, remainder);
	}
	
	public static void main(String[] args) {

		calculateCentimeters(1, 1);
		calculateCentimeters(-12, 1);
		calculateCentimeters(1, 13);
		calculateCentimeters(13);
		calculateCentimeters(156);

	}

}
