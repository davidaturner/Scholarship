package _547;

import java.util.Scanner;

public class MinMaxInputChallenge {

	public static void main(String[] args) {

		System.out.println("Hello, World!");
		Scanner sc = new Scanner(System.in);
		int min = 0, max = 0;

		while (true) {
			System.out.println("Enter a number: ");
			boolean hasNextInt = sc.hasNextInt();
			if ( hasNextInt ) {
				int number = sc.nextInt();
				System.out.println(number);
				if (min == 0 || number < min) {
					min = number;
				}
				if (max == 0 || number > max) {
					max = number;
				}
			}
			sc.nextLine();
			System.out.println("Minimum: " + min + " Maximum: " + max);
			if ( !hasNextInt ) {
				System.out.println("Done!");
				break;
			}
		}
		sc.close();
	}

}
