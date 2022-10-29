package com.wozu._5.arithmactivity;

public class ArithmetricActivity {

	public static void main(String[] args) {
		
		System.out.println(newpayments(1.00, 0.20));
		System.out.println(getAverage(1, 2));
	}
	
	public static double newpayments(double cost, double deliveryfee) {
		return (cost + deliveryfee) * 100;
	};
	
	public static double getAverage(double a, double b) {
		double average = (a + b) / 2;
		return average;
	}

}
