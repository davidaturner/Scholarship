package com.wozu._5.activity;

public class Activity {

	public static void main(String[] args) {
		int[] inputarr = {1, 2, 3, 4, 5};
		print(doubleArray(inputarr));
		
		System.out.println(getAverage(inputarr));

	}
	
    public static int[] doubleArray(int[] numbers) {
        int[] results = new int[numbers.length];

        int i = 0;
        for(int number: numbers) {
        	number *= 2;
        	results[i++] = number;
        }
        return results;
    }
    
    public static double getAverage(int[] numbers) {
        double results = 0.0;
        if(numbers.length > 0) {
          int i = 0;
          do {
            results += numbers[i++];
          } while (i < numbers.length);
          results /= numbers.length;
        }
        return results;
    }
    
    public static void print(int[] numbers) {
    	for(int number : numbers) {
    		System.out.print(number + " ");
    	}
    	System.out.println("\n");
    }

}
