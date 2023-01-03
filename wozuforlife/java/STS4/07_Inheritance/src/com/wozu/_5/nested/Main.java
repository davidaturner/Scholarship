package com.wozu._5.nested;

public class Main {

	public static void main(String[] args) {
	    String sampleString = "Hey There, Neighbor";
	    int number = 9;

	    // whisper
	    String whisper = Toolkit.StringAssist.whisper(sampleString);
	    System.out.println(whisper);

	    // yell
	    String yell = Toolkit.StringAssist.yell(sampleString);
	    System.out.println(yell);

	    // is even
	    boolean isEven = Toolkit.MathAssist.isEven(number);
	    System.out.println(number + " is even? " + isEven);

	    // is odd
	    boolean isOdd = Toolkit.MathAssist.isOdd(number);
	    System.out.println(number + " is odd? " + isOdd);
	}

}
