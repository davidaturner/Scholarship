package com.wozu._2.operators;

public class LessThanGreaterThan {

	public static void main(String[] args) {
		compareLessThan(4, 5);
		compareLessThan(4, 4);
		compareLessThan(4, 3);
		compareLessThanEqualTo(4, 5);
		compareLessThanEqualTo(4, 4);
		compareLessThanEqualTo(4, 3);
		
		checkAge(17);
		checkAge(18);
		checkAge(46);

	}
	
	public static void compareLessThan(int a, int b) {
		if(a < b){
		    System.out.println("a is less than b");
		}
		else {
		    System.out.println("a is not less than b");			
		}
	}
	
	public static void compareLessThanEqualTo(int a, int b) {
		if(a <= b){
		    System.out.println("a is less than or equal to b");
		} else {
		    System.out.println("a is not less than nor equal to b");			
		}
	}
	
	public static void checkAge(int userAge) {

		// if the user's age at least 18 (greater than or equal to 18), then they can purchase tickets.
		if(userAge >= 18){
		    System.out.println("Here are your tickets. Enjoy the movie!");
		}
		// otherwise, (they are not at least 18) they cannot purchase the tickets.
		else{
		    System.out.println("Sorry, you are too young to purchase tickets for this movie.");
		}
	}

}
