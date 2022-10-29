package com.wozu._12.decisions;

public class DecisionsActivity {

	public static void main(String[] args) {

		System.out.println(isbool(0));
		System.out.println(isbool(1));
		System.out.println(istrue(false));
		System.out.println(istrue(true));

	}

	public static boolean isbool(int number) {
		
		boolean isUno = false;
		if (number == 1) {
			isUno = true;
		}
		return isUno;
	}
	
	public static boolean istrue(boolean bool) {
		
		boolean isTrue = false;
		if (bool) {
			isTrue = true;
		}
		return isTrue;
	}
}
