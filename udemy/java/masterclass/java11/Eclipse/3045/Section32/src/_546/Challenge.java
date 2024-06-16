package _546;

import java.util.Scanner;
public class Challenge {

	public static int INVALID_INPUT = -1;
	public static int LAST_TO_BE_ENTERED = 10;
	public static void main(String[] args) {
		
		int sum = 0, numbersAdded = 1;
		Scanner sc = new Scanner(System.in);
		while (numbersAdded <= LAST_TO_BE_ENTERED) {
			int number = getNextInt(sc, numbersAdded);
			if (number != INVALID_INPUT) {
				sum += number;
				numbersAdded++;
			} else {
				System.out.println("Invalid number.");				
			}		
		}
		
		System.out.println("Sum: " + sum);
		sc.close();

	}
	
	public static int getNextInt(Scanner sc, int tries) {

		int number = 0;
		if (sc != null) {
			System.out.println("Enter a number #" + tries + ":");
			number = (sc.hasNextInt())? sc.nextInt() : INVALID_INPUT;

			sc.nextLine();
		}
		return number;			
	}

}
