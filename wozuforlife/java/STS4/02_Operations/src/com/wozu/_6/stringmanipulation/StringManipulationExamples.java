package com.wozu._6.stringmanipulation;

public class StringManipulationExamples {

	public static void main(String[] args) {

		String morningGreeting = "Good Morning";
		String name = "Alex";
		System.out.println(morningGreeting);
		System.out.println(name);

		System.out.println(morningGreeting + " " + name);
		
		boolean isProgrammer = true;
		System.out.println("Am I a programmer? " + isProgrammer);

		int age = 30;
		System.out.println("My age: " + age);
		
		int greetingLength = morningGreeting.length();
		System.out.println(greetingLength);
		
		System.out.println(morningGreeting.toUpperCase());
		System.out.println(morningGreeting.toLowerCase());
		
		
	}

}
