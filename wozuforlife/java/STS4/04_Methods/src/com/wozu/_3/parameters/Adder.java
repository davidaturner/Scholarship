package com.wozu._3.parameters;

public class Adder {

	public static void main(String[] args) {
	    int num1 = 1;
	    int num2 = 2;

	    // invoke the "add" method with two integer parameters
	    add(num1, num2);
	    
	    // store the returned value of the "add" method
	    int sum = add1(num1, num2);
	    System.out.println(sum);
	}

	public static void add(int number1, int number2){
	    System.out.println(number1 + number2);
	}

	// add method returns an integer
	public static int add1(int number1, int number2){
	    return(number1 + number2);
	}
}
