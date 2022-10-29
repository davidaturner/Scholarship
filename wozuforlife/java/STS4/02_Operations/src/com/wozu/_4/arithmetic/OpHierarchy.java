package com.wozu._4.arithmetic;

public class OpHierarchy {

	public static void main(String[] args) {

		System.out.println(2 * 3 + 4);
		
		System.out.println(2 + 3 * 4);
/*		
		You can remember the order of execution for math formulas with the acronym P.E.M.D.A.S., which stands for:

			Parenthesis
			Exponents
			Multiplication
			Division
			Addition
			Subtraction
*/
		
		// Example of order evaluation
		System.out.println(2 * (4 / 2 + 5 * 3));
		System.out.println(2 * (2 + 5 * 3));
		System.out.println(2 * (2 + 15));
		System.out.println(2 * (17));
	}

}
