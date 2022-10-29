package com.wozu._08.datatypes;

public class DatatypesVariables {

	public static void main(String[] args) {

		helloworld();
	}
	
	public static void helloworld() {
		System.out.println("Hello, World!");
	}

	public static void helloworldx3() {
	    System.out.println("Hello World!");
	    System.out.println("Hello World!");
	    System.out.println("Hello World!");
	}
	
	public static void variables() {
		/*
		Common Data Types in Java
		Data type	Can hold						Examples
		int			a whole number					0, 42, -123
		String		a sentence (many characters)	"Hello World!", "Bob", "Forgot Password?"
		boolean		true or false					true, false

		There are many more data types from which to choose. In this section, you will learn 
		the most common.
		*/
	}
	public static void datatypes() {
		int players = 9;
		String name = "Joe Santos";
		boolean enrolled = true;
		System.out.println(players);
		System.out.println(name);
		System.out.println(enrolled);
	}
	
	public static void message() {
	    String message = "Hello World!";
	    System.out.println(message);
	}
	
	public static void messagex3() {
	    String message = "Hello World!";
	    System.out.println(message);
	    System.out.println(message);
	    System.out.println(message);
	}
	
	public static void nap() {
	    String message = "he was taking a \"nap\" in the back of the class";
	    System.out.println(message);
	}
		
	public static void charexamples() {
	    char letter = 'E';
	    System.out.println(letter);
	    letter = '\u03A9';
	    System.out.println(letter);	    
	}
	
	public static void intexamples() {
		int daysOfTheWeek = 7;
		int caloriesConsumed = 2000;
		int populationOfChinaIn2017 = 1371000000;
		
		int age = 26;
		System.out.println(age);
		
		int sum = 2 + 2;
		int newSum = sum;

		System.out.println(sum);
		System.out.println(newSum);
	}
	
	public static void doubleexample( ) {
		double pi = 3.14;
	}
	
	public static void floatexample( ) {
		float pi = 3.14f;
	}
	
	public static void booleanexample() {
		boolean isUserLoggedIn = true;
		boolean isRestaurantOpen = false;
		boolean isBatteryLow = true;
		
		boolean isEclipseOpen = true;
		System.out.println(isEclipseOpen);
	}
	
	public static void finalexample() {
		final int HOURS_IN_A_DAY = 24;
		System.out.println(HOURS_IN_A_DAY);
	}
}
