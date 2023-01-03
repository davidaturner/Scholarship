package com.wozu._3.activity;

public class Activity {

	public static void main(String[] args) {
		
		String[] musicians = newArray1();
		System.out.println(musicians[0]);
		String[] grades = newArray2();
		System.out.println(grades[0]);
	}

	public static String[] newArray1() {
		String[] musicians = {"John", "Mike", "Joe", "Kevin"};
		return musicians;
	}
	
	public static String[] newArray2() {
		String[] grades = {"A","B", "C", "D","F"};
		return grades;
	}
}
