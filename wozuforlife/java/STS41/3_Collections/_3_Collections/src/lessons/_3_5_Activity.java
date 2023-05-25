package lessons;

public class _3_5_Activity {

	public static void main(String[] args) {

//		activity1();
		activity2();
	}
	
	public static void activity1() {
		
//		In the doubleArray method of the StudentCode class, use a for loop to go through the numeric items in 
//		the numbers array variable. For each numeric item, double it and add it to the results array.
//
//		For instance, if the number array contained { 1, 2, 3 }, the results array should be { 2, 4, 6 } as each 
//		number was doubled.
		int[] arr = { 1, 2, 3 };
		printIntArray(doubleArray(arr));
	}
	
	public static void activity2() {
		
//		In the getAverage method of the StudentCode class, use a do...while loop to go through the numeric items in 
//		the numbers array variable to find the average. The variable results should contain the final result. 
//		Remember, the average is computed by getting the sum of all items and dividing by the count of items.
//
//		Code was added for you to ensure the number array is not empty.
//
//		For instance, if the number array contained { 1, 2, 3 }, the results variable should be 2, since that is 
//		the average.
		int[] arr = { 1, 2, 3, 4, 5 };
		System.out.println(getAverage(arr));
	}
	
	public static int[] doubleArray(int[] arr) {
		
		int[] doubledValues = new int[arr.length];
		for(int i=0; i<arr.length; i++) {
			
			doubledValues[i] = arr[i] * 2;
		}
		return doubledValues;
		
	}

	public static int getAverage(int[] numbers) {
		
		int results = 0;
		// use a do while loop.
		int i = 0;
		do {
			
			results += numbers[i];
			i++;
			
		} while (i < numbers.length);
		
		results /= numbers.length;
		return results;
		
	}
	
//	public static int getAverage(int[] numbers) {
//		
//		int results = 0;
//		for(int val : numbers) {
//			
//			results += val;
//		}
//		
//		results /= numbers.length;
//		return results;
//		
//	}
	
	public static void printIntArray(int[] arr) {
		
		for( int val : arr ) {
			System.out.println(val);
		}
	}

}
