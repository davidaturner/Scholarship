package com.wozu._2.operators;

public class Simple {

	public static void main(String[] args) {
		
		simpleEqual(5, 6);
		simpleEqual(6, 6);
	}

	public static boolean simpleEqual(int a, int b) {
		
		// this will evaluate to a boolean value
		return a == b;
	}
	
	public static void simpleNotEqual() {
		int frankAge = 30;
		int kevinAge = 40;
		System.out.println(frankAge != kevinAge);
	}
	
	public static void simpleNotEqual2() {
		int secondsPerMinute = 60;
		int minutesPerHour = 60;
		System.out.println(secondsPerMinute != minutesPerHour);
	}
	
}
