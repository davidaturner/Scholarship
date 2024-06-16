package _548;

import java.util.Scanner;

public class Main {

	public static int ARRLENGTH = 10;
	public static void main(String[] args) {

//		example1();
		Scanner sc = new Scanner(System.in);
		
		int[] myIntegers = getIntegers(sc, 5);
		printArray(myIntegers);
		
		System.out.println("The average is "+getAverage(myIntegers));
		
		sc.close();
	}
	
	public static int[] getIntegers(Scanner sc, int number) {
		
		int[] setOfIntegers = new int[number];
		
		System.out.println("Enter " + number + " integers.\r");
		for(int i=0; i<setOfIntegers.length; i ++) {
			
			setOfIntegers[i] = sc.nextInt();
			sc.nextLine();
		}		
		
		return setOfIntegers;
	}
	
	public static double getAverage(int[] integers) {
		
		int sum = 0;
		for(int i=0; i<integers.length; i++) {
			
			sum += integers[i];
		}
		
//		return (double)(sum / integers.length); // this will not divide into whole numbers.
		return (double)sum / (double)integers.length;
	}
	
	public static void example1() {
		// primitive arrays
		int[] myIntArray = new int[ARRLENGTH];
//		int[] myIntArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
		
		for(int i=0; i<ARRLENGTH; i++) {
			myIntArray[i] = i * 10;
		}
//		System.out.println(myIntArray[1]);
		printArray(myIntArray);
	}
	
	public static void printArray(int[] arrayToBePrinted) {
		
		if (arrayToBePrinted !=null && arrayToBePrinted.length > 0) {
			for(int i=0;  i<arrayToBePrinted.length; i++) {
				System.out.println("Element: " + i + " Value: " + arrayToBePrinted[i]);
			}
		}
	}

}
