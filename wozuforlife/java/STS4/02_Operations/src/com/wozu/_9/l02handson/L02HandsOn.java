package com.wozu._9.l02handson;

public class L02HandsOn {

	public static void main(String[] args) {

		Step1(65);
		Step1(10);
		Step1(24);
		
		Step2(65, true);
		Step2(10, false);
		Step2(24, true);
		
		Step3(67, false);
		Step3(5, true);
		Step3(33, false);
		
		Step3(-10, true);
		
	}

	public static void Step1(int age) {

		// if senior citizen, pay $7
		if (age >= 65) {
			System.out.println("Pay $7.");
		}
		// if child, pay $8
		else if (age >= 0 && age <=12){ 
			System.out.println("Pay $8.");			
		}
		// everyone else, pay $10
		else {
			System.out.println("Pay $10.");
		}
	}
	
	public static void Step2(int age, boolean isStudent) {

		// if senior citizen, pay $7
		if (age >= 65) {
			System.out.println("Pay $7.");
		}
		// if student, pay $8
		// if child, pay $8
		else if ( (age >= 0 && age <=12) || isStudent) {
			System.out.println("Pay $8.");
		}
		// everyone else, pay $10
		else {
			System.out.println("Pay $10.");
		}
	}
	
	public static void Step3(int age, boolean isStudent) {

		if (age < 0) {
			System.out.println("Invalid value.");
			return;
		}
		// if senior citizen, pay $7
		if (age >= 65) {
			System.out.println("Pay $7.");
		}
		// if student, pay $8
		// if child, pay $8
		else if ( (age >= 0 && age <=12) || isStudent) {
			System.out.println("Pay $8.");
		}
		// everyone else, pay $10
		else {
			System.out.println("Pay $10.");
		}
	}
}
