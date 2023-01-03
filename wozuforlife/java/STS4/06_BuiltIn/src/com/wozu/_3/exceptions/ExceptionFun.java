package com.wozu._3.exceptions;

public class ExceptionFun {

	public static void main(String[] args) {

		System.out.println("*--------------------------*");
		Exception1();
		System.out.println("*--------------------------*");
		Exception2();
		System.out.println("*--------------------------*");
		Exception3();

	}
	
	public static void Exception1() {
	    int result = 0;
	    // try to divide by zero and print the result
	    try{
	        result = 1/0;
	    }
	    // print error message if an error is encountered
	    catch(Exception e){
	        System.out.println("An error occurred when calculating the result.");
	        result = -1;
	    }
	}
	
	public static void Exception2() {
	    int result = 0;
	    // try to divide by zero and print the result
	    try{
	        result = 1/0;
	    }
	    // print error message and stack trace if an error is encountered
	    catch(Exception e){
	        System.out.println("An error occurred when calculating the result.");
	        result = -1;
	        e.printStackTrace();
	    }
	}
	
	public static void Exception3() {
		int result = 0;

		try{
		    result = 1/0;
		}
		// print error message if an error is encountered
		catch(Exception e){
		    System.out.println("An error occurred when calculating the result.");
		    result = -1;
		    e.printStackTrace();
		}
		// print -1
		finally{
		    System.out.println("The new result is: " + result);
		}
	}

}
