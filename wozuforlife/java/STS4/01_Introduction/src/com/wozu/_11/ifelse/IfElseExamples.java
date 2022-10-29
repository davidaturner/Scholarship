package com.wozu._11.ifelse;

public class IfElseExamples {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	
	public static void ifexample( ) {
		boolean thingThatCouldBeTrueOrFalse = true;

		if (thingThatCouldBeTrueOrFalse) {
		    System.out.println("it's all True!");
		}		
		
		boolean isCold = true;

		if (isCold) {
		    System.out.println("Wear a coat. It's cold outside!");
		}
	}
	
	public static void ifelseexample() {
	    // declare variables
	    boolean isMarketOpen = true;

	    // if the market is open, print "The market is open!"
	    if (isMarketOpen) {
	        System.out.println("The market is open!");
	    }
	    else {
	        System.out.println("The market is closed.");
	    }		
	}

}
