package lessons;

public class _2_4_Arithmetric {

	public static void main(String[] args) {

		additionSubtraction();
		multiplicationDivision();
		hierarchy();
		modulus();
		
	}


	
	public static void additionSubtraction() {
		
		System.out.println(2+2);
		
		int sum = 2 + 2;
		System.out.println(sum);
		
		sum = 1 + 2 + 3 + 4 + 5;
		System.out.println(sum);
		
		sum = 4;

		// adding one to the variable
		sum = sum + 1;

		System.out.println(sum);
		
		sum = 4;

		// adding one to the variable
		sum++;

		System.out.println(sum);
		
		sum = 4;

		// subtracting one from the variable
		sum--;

		System.out.println(sum);
	}
	
	public static void multiplicationDivision() {
		
		// multiplication
		int product = 6 * 3;
		System.out.println(product);
		
		// division
		int quotient = 6 / 3;
		System.out.println(quotient);
		
	}
	
	public static void hierarchy() {
		
		System.out.println(2 * 3 + 4);
		
		System.out.println(2 + 3 * 4);
		
//		You can remember the order of execution for math formulas with the acronym 
//		P.E.M.D.A.S., which stands for:
//
//			Parenthesis
//			Exponents
//			Multiplication
//			Division
//			Addition
//			Subtraction
		
		System.out.println(2 * (4 / 2 + 5 * 3));
	}
	
	public static void modulus() {
		
		int remainder = 5 % 2;
		System.out.println(remainder);
		
		remainder = 54321 % 12345;
		System.out.println(remainder);
		
		// an integer to hold your number
		int number = 123;

		// if the modulus of the number (remainder) divided by 2 is 0, then print "it's even"
		if(number % 2 == 0){
		    System.out.println("The number is even.");
		}
		// otherwise, print "the number is odd"
		else{
		    System.out.println("The number is odd.");
		}
	}

}
