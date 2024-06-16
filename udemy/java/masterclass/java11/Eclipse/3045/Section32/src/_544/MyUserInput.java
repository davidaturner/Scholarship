package _544;

import java.util.Scanner;

public class MyUserInput {

	public static void main(String[] args) {

		try {

			Scanner sc = new Scanner(System.in);
			
			System.out.println("Enter your name: ");
			String name = sc.nextLine();
			
			int currentYear = 2024;
			System.out.println("Enter your year of birth: ");
			int yearofBirth = sc.nextInt();
			sc.nextLine();	// handle the enter key.
			
			System.out.println("Your name is " + name +
									" and your are " + (currentYear - yearofBirth) + " years old. " );
			sc.close();

		} catch(Exception ex) {
			
		}

	}

}
