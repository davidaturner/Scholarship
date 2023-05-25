package handsonl2;

public class _handson {

	public static void main(String[] args) {

//		step1();
//		step1(1);
//		step1(13);
//		step1(65);
//		step2();
//		step2(0);
//		step2(45);
//		step2(66);
//		step2(-1);
		step3();
	}
	
	public static void step1() {
		
		int age = 11;

		// if senior citizen, pay $7
		if (age >= 65) {
			System.out.println("Pay $7.");
		}
		// if child, pay $8
		else if (age >= 0 && age <=12) {
			System.out.println("Pay $8.");
		}
		// everyone else, pay $10
		else {
			System.out.println("Pay $10.");
		}
	}
	
	public static void step1(int age) {
		
		// if senior citizen, pay $7
		if (age >= 65) {
			System.out.println("Pay $7.");
		}
		// if child, pay $8
		else if (age >= 0 && age <=12) {
			System.out.println("Pay $8.");
		}
		// everyone else, pay $10
		else {
			System.out.println("Pay $10.");
		}
	}
	
	public static void step2() {
		
		int age = 12;
		boolean isStudent = false;
		
		// if student, pay $8
		if (age < 65 && isStudent) {
			System.out.println("Pay $8.");
		} else {
			step1(age);
		}
	}
	
	public static void step2(int age) {
		
		boolean isStudent = false;
		
		// if student, pay $8
		if (age < 65 && isStudent) {
			System.out.println("Pay $8.");
		} else {
			step1(age);
		}
	}
	
	public static void step3() {
		
		int age = -1;
		if (age < 0) {
			System.out.println("Invalid age!");
		} else {
			step2(age);
		}
	}

}
