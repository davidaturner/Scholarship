package _545;

import java.util.Scanner;

public class MyUserInput {

	public static void main(String[] args) {

		int currentYear = 2024;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter your name: ");
		String name = sc.nextLine();
		
		System.out.println("Enter your year of birth: ");
		boolean yearofBirthFound = sc.hasNextInt();
//		System.out.println(yearofBirthFound);
		
		if (yearofBirthFound) {
			//		int currentYear = 2024;
//			System.out.println("Enter your year of birth: ");
			int yearofBirth = sc.nextInt();
			sc.nextLine();	// handle the enter key.
			
			//		System.out.println("Your name is " + name +
			//		" and your are " + (currentYear - yearofBirth) + " years old. " );
			
			int age = currentYear - yearofBirth;		
			if (isAgeValid(age)) {
//				System.out.println("Your name is " + name +
//						" and your are " + (currentYear - yearofBirth) + " years old. " );		
				System.out.println("Your name is " + name +
						" and your are " + age + " years old. " );	
			} else {
				System.out.println("Invalid year of birth");
			}				
		} else {
			System.out.println("Unable to parse year of birth");		
		}

		sc.close();

	}
	
	public static boolean isAgeValid(int age) {
		
		return age >= 0 && age <= 100;
	}

}
