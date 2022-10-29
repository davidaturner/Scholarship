package com.wozu._14.l01handson;

public class L01HandsOn {

	public static void main(String[] args) {

		step1(false);
		step1(true);
		
		step2(false, false);
		step2(false, true);
		step2(true, false);
		step2(true, true);
		
		step3(false, false);
		step3(false, true);
		step3(true, false);
		step3(true, true);
	}
	
	public static void step1(boolean isSunny) {
		// if it's sunny
		if (isSunny) {
	    	// print "Wear sunglasses!"
			System.out.println("Wear sunglasses!");
			// else
		} else {
	    	// print "Don't wear sunglasses."	
			System.out.println("Don't wear sunglasses.");
		}
	}
	
	public static void step2(boolean isSunny, boolean atBeach) {
		// if it's sunny
		if (isSunny) {
	    // print "Wear sunglasses!"
			System.out.println("Wear sunglasses!");
			// if at the beach
			if (atBeach) {
	        // print "Wear sunblock!"
				System.out.println("Wear sunblock!");
			    // else
			} else {
	        // print "Don't need sunblock."
				System.out.println("Don't need sunblock.");
			}
			// else
		} else {
	    // print "Don't need to wear sunglasses."
			System.out.println("Don't need to wear sunglasses.");
		}
	}
	
	public static void step3(boolean isSunny, boolean atBeach) {
		// if it's sunny
		if (isSunny) {
		    // print "Wear sunglasses!"
			System.out.println("Wear sunglasses!");
		    // if at the beach
			if (atBeach) {
		        // print "Wear sunblock!"
				System.out.println("Wear sunblock!");

		    // else
			} else {
		        // print "Don't need sunblock."
				System.out.println("Don't need sunblock.");
			}
		// else
		} else {
		    // print "Don't need to wear sunglasses."
			System.out.println("Don't need to wear sunglasses.");
		    // if at the beach
			if (atBeach) {
		        // print "Come back tomorrow."
				System.out.println("Come back tomorrow.");
		    // else
			} else {
		        // print "Don't go to the beach."
				System.out.println("Don't go to the beach.");
			}
		}
	}

}
