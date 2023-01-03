package com.wozu._6.handson4;

public class HandsOnL04 {

	public static void main(String[] args) {
		
		int val = 2;
		System.out.println("Value: " + val);
		System.out.println("Doubled: " + doubleMe(val) + "\n");

		System.out.println("Value: " + val);
		System.out.println("Quadrupled: " + quadrupleMe(val) + "\n");

		int times = 3;
		System.out.println("Value: " + val + " Times: " + times);
		System.out.println("Doubled Times: " + doubleMeTimes(val, times));
	}
	
	public static int doubleMe(int val) {
		return 2* val;
	}
	
	public static int quadrupleMe(int val) {
		return doubleMe(doubleMe(val));
	}
	
	public static int doubleMeTimes(int val, int times) {
		int doubleMeTimes = val;
		for(int i=0; i<times; i++) {
			doubleMeTimes = doubleMe(doubleMeTimes);
		}

		return doubleMeTimes;
	}


}
