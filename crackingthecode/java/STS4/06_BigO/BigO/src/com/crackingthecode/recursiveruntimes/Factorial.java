package com.crackingthecode.recursiveruntimes;

public class Factorial {

	public static int numberOfCalls = 0;
	
	public static int factorial(int n) {
	
		numberOfCalls++;
		
		// root case
		if (n <= 1) {
			return 1;
		}
		
		// recursive case
		return n * factorial(n-1);
	}
	
	public static void main(String[] args) {
		
		System.out.println(String.format("Factorial of %d: %d", 0, factorial(0)));
		System.out.println("Number of calls: " + numberOfCalls);
		numberOfCalls = 0;
		
		System.out.println(String.format("Factorial of %d: %d", 1, factorial(1)));
		System.out.println("Number of calls: " + numberOfCalls);
		numberOfCalls = 0;
		
		System.out.println(String.format("Factorial of %d: %d", 2, factorial(2)));
		System.out.println("Number of calls: " + numberOfCalls);
		numberOfCalls = 0;
		
		System.out.println(String.format("Factorial of %d: %d", 3, factorial(3)));
		System.out.println("Number of calls: " + numberOfCalls);
		numberOfCalls = 0;
		
		System.out.println(String.format("Factorial of %d: %d", 4, factorial(4)));
		System.out.println("Number of calls: " + numberOfCalls);
		numberOfCalls = 0;

//		Factorial of 0: 1
//		Number of calls: 1
//		Factorial of 1: 1
//		Number of calls: 1
//		Factorial of 2: 2
//		Number of calls: 2
//		Factorial of 3: 6
//		Number of calls: 3
//		Factorial of 4: 24
//		Number of calls: 4
		
//		Therefore, BigO: O(N);

	}

}
