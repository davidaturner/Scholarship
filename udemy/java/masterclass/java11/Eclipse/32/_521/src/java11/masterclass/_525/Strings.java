package java11.masterclass._525;

public class Strings {

	public static void main(String[] args) {

		// eight primitive types
		// byte
		// short
		// int
		// long
		// float
		// double
		// char
		// boolean
		String myString = "This is a string";
		System.out.println("myString is equal to " + myString);
		myString = myString + ", and this is more.";
		System.out.println("myString is equal to " + myString);
		myString = myString + " \u00A92019";
		System.out.println("myString is equal to " + myString);
		
		String numberString = "250.55";
		numberString = numberString + "49.55";
		System.out.println(numberString);
		String anotherString = "10";
		int myInt = 50;
		anotherString = anotherString + myInt;
		System.out.println("AnotherString is equal to " + anotherString);
		double myDouble = 120.74d;
		anotherString = anotherString + myDouble;
		System.out.println("AnotherString is equal to " + anotherString);	
		
		// Strings are immutable that means is inefficient to use Strings in this way (ie. editing updating)
		// Use instead StringBuffer.
		

	}

}
