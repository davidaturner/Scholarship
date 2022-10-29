package com.wozu._3.opsactivity;

public class OperationActivity {

	public static void main(String[] args) {
		System.out.println(checkEverything(true, true, true));
		System.out.println(checkEverything(false, true, true));
		System.out.println(checkEverything(true, false, true));
		System.out.println(checkEverything(true, true, false));
		
		System.out.println(studentCanWatch(11, true));
		System.out.println(studentCanWatch(13, false));
		System.out.println(studentCanWatch(13, true));
		System.out.println(studentCanWatch(19, true));
	}		
	
	public static boolean checkEverything(boolean bool1, boolean bool2, boolean bool3) {
		boolean isAllTrue = bool1 && bool2 && bool3;
		return isAllTrue;
	}
	
	public static boolean studentCanWatch(int age, boolean withParent) {
		boolean canWatch = age >= 18 || (age >= 13 && withParent);
		return canWatch;
	}

}
