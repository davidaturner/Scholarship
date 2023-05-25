package lessons;

public class _2_7_Activity {

	public static void main(String[] args) {

		activity1();
		activity2();

	}
	
	public static void activity1() {
		
//		In the getFullName method of the Student class, set the value of the fullName 
//		variable by concatenating the firstName and lastName string variables with a 
//		space in between.
		System.out.println(getFullName("Joe", "Santos"));
		System.out.println(getFullName("Robert", "Fripp"));
	}
	
	public static void activity2() {
		
//		In the doesLengthMatch method of the Strings class, add the code to compute the 
//		boolean result of whether the length of the source string variable equals the value 
//		of the count integer variable. The result should be assigned to the given 
//		lengthMatches boolean variable.
//
//		Do not use if/else to set the value of lengthMatches. This can be done on a single 
//		line. Remember, the result of an equality operation is a boolean value.
		System.out.println(doesLengthMatch("Hello, World!", 13));
		System.out.println(doesLengthMatch("Hello, World!", 12));
	}
	
	public static String getFullName(String firstName, String lastName) {
		
		String fullName = firstName + " " + lastName;
		return fullName;
	}
	
	public static boolean doesLengthMatch(String source, int count) {
		
		boolean lengthMatches = source.length() == count;
		return lengthMatches;
	}

}
