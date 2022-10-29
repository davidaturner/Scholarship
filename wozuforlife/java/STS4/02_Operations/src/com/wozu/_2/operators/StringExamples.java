package com.wozu._2.operators;

public class StringExamples {

	public static void main(String[] args) {
		
		stringEqualityExample1();
		stringEqualityExample2();
		stringNotEqualityExample();

	}
	
	public static void stringEqualityExample1() {
		// All 3 vars have the same string value: My dog Fido.
		String var1 = "My dog Fido.";
		String var2 = "My dog Fido.";
		String var3 = new String("My dog Fido.");

		// TRUE! because both are assigned to the same literal
		boolean equal12 = (var1 == var2);
		System.out.println(equal12);

		// FALSE! `var3` is created using `new`
		boolean equal23 = (var2 == var3);
		System.out.println(equal23);

	}
	
	public static void stringEqualityExample2() {
		String var1 = "My dog Fido.";
		String var2 = "My DOG Fido.";   // notice the case
		String var3 = new String("My dog Fido.");

		// FALSE! case (capitalization) matters!
		boolean equal12 = var1.equals(var2);
		System.out.println(equal12);
		
		// TRUE! both variables contain the same string value
		boolean equal13 = var1.equals(var3);
		System.out.println(equal13);
	}
	
	public static void stringNotEqualityExample() {
		String var1 = new String("My dog Fido.");
		String var2 = new String("My dog Spot.");   // different dog name

		// Test for equality
		// FALSE! "var1" and "var2" are not equal
		boolean equal12 = var1.equals(var2);
		System.out.println(equal12);

		// Test for Inequality (note the not operator)
		// TRUE! "var1" does NOT (!) equal "var2"
		boolean notEqual12 = !var1.equals(var2);
		System.out.println(notEqual12);
	}
}
