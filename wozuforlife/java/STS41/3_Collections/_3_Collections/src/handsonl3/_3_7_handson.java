package handsonl3;

public class _3_7_handson {

	public static void main(String[] args) {

//		step1();
//		step2();
		step3();
	}
	
	public static void step1() {
		
		int[] numbers = { 0, 0, 0, 0, 0 };
		for(int i=0; i<numbers.length; i++) {
			
			numbers[i] = StudentHelper.ReadInputInt();
		}
		for(int val : numbers) {
			System.out.println(val);
		}
	}
	
	public static void step2() {
		
		printReverse(getIntArray());
	}
	
	public static void step3() {
		
		printOddIndexed(getIntArray());
	}
	
	public static int[] getIntArray() {
		
		int[] numbers = { 0, 0, 0, 0, 0 };
		for(int i=0; i<numbers.length; i++) {
			
			numbers[i] = StudentHelper.ReadInputInt();
		}
		return numbers;
	}
	
	public static void printOddIndexed(int[] arr) {
		
		for( int i = 0; i < arr.length; i++) {
			
			if ( i % 2 == 1 ) {
				System.out.println(arr[i]);
			}
		}
	}
	
	public static void printReverse(int[] arr) {
		
		for( int i = arr.length-1; i>=0; i--) {		
			System.out.println(arr[i]);
		}
		
	}
	
	public  static void printArray(int[] arr) {
		
		for(int val : arr) {
			System.out.println(val);
		}
	}
	
	

}
