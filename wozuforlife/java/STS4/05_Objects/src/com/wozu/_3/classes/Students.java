package com.wozu._3.classes;

public class Students {

	public static void main(String[] args) {
		// student 1
		String firstName = "James";
		String lastName = "Gosling";
		String courseFocus = "Java";
		System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
		
		// student 2
		// ERROR: Cannot re-instantiate (duplicate) local variable
//		String firstName = "Anders";
//		String lastName = "Hejlsberg";
//		String courseFocus = "C#";
		System.out.println(firstName + " " + lastName + " is studying " + courseFocus);

	}
}
