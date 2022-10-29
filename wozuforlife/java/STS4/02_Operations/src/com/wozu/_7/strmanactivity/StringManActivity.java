package com.wozu._7.strmanactivity;

public class StringManActivity {

	public static void main(String[] args) {

		System.out.println(getFullName("Joe", "Santos"));
		System.out.println(getFullName("Lizzy", "Cauler"));
		
		System.out.println(doesLengthMatch("Laura", 3));
		System.out.println(doesLengthMatch("Laura", 5));		
	}

	public static String getFullName(String firstname, String lastname) {
		String fullname = firstname + " " + lastname;
		return fullname;
	}
	
	public static boolean doesLengthMatch(String source, int length) {
		boolean lengthMatch = source.length() == length;
		return lengthMatch;
	}
}
