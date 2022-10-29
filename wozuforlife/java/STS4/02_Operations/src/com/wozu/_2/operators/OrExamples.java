package com.wozu._2.operators;

public class OrExamples {

	public static void main(String[] args) {
		imSleepy(false, false);
		imSleepy(false, true);
		imSleepy(true, false);
		imSleepy(true, true);

	}

	public static void imSleepy(boolean isSleepy, boolean isLibraryClosed) {

		if(isSleepy || isLibraryClosed) {
		    System.out.println("You should leave now.");
		}
		else {
		    System.out.println("Keep on studying!");
		}
	}
}
