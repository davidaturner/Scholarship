package com.wozu._4.loops;

public class DoWhile {

	public static void main(String[] args) {
		String userInput;

		do {
		    System.out.println("Computer: Hi");
		    // read user input
		    userInput = StudentHelper.ReadInputString();
		    // echo user input
		    System.out.println("You: " + userInput);
		}
		while(userInput.equals("Hi"));

		// illustrates the rest of the code
		System.out.println("Out of the loop");

	}

}
