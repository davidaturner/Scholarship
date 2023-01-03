package com.wozu._4.activity;

public class Activity {

	public static void main(String[] args) {

		String name = "Joe";
		double[] arr = { 1.2, 5.0, 4.4 };
		
		System.out.println(greetMe(name));
		System.out.printf("%.2f", getAverage(arr));

	}
	
	public static String greetMe(String name) {
		return "Hello, " + name;
	}
	
	public static double getAverage(double[] arr) {
		double result = 0.0;
		if (arr == null || arr.length == 0) {
			return result;
		}
		for (int i=0; i<arr.length; i++) {
			result += arr[i];
		}
		return result / arr.length;		
	}

}
