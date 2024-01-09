package _533;

public class Operators {

	public static void main(String[] args) {

		// Operator precedence
//		https://introcs.cs.princeton.edu/java/11precedence/
		
		// Challenge
		double myFirstDouble = 20.00;
		System.out.println("MyFirstDouble =  " + myFirstDouble);		
		double mySecondDouble = 80.00;
		System.out.println("MySecondDouble =  " + mySecondDouble);	
		System.out.println("MyValuesDouble = " + (myFirstDouble + mySecondDouble) );
		double result = (myFirstDouble + mySecondDouble) * 100;
		result %= 40.00;
		System.out.println("result =  " + result);
		
		boolean hasNoRemainder = (result == 0)?true:false;
		
		System.out.println("HasNoRemainder =  " + hasNoRemainder);
		if (!hasNoRemainder) {
			System.out.println("Got some remainder");
		}

	}

}
