package com.wozu._3.parameters;

public class IsEven {

	public static void main(String[] args) {
	    System.out.println(isEven(0));
	}

	public static boolean isEven(int number){

	    boolean result;

	    // if the number is even, set variable to true
	    if(number % 2 == 0){
	        result = true;
	    }
	    // otherwise, set variable to false
	    else{
	        result = false;
	    }

	    // return the variable
	    return result;
	}
}
