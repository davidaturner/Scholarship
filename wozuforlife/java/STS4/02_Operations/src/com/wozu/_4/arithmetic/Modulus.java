package com.wozu._4.arithmetic;

public class Modulus {

	public static void main(String[] args) {
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
