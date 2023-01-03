package com.wozu._4.loops;

public class IfIsTrue {

	public static void main(String[] args) {
		
		ifItsTrue(false);
		ifItsTrue(true);
		
		keepLoopingUnitQuit();

	}
	
	public static void ifItsTrue(boolean isItTrue) {
		
		while(isItTrue){
			System.out.println("Ask once...");
			System.out.print("Enter input: ");
		    // my input: "Hi!" (multiple times)
		    String userInput = StudentHelper.ReadInputString();
		    System.out.println("Echo: " + userInput);
		    isItTrue = false;
		}
		System.out.println("Rest of the code...\n");
	}
	
	public static void keepLoopingUnitQuit() {

		// a boolean variable to be used to determine if you should keep looping
		boolean keepLooping = true;
		System.out.println("Starting looping...");
		
		// loop if the looping variable is true
		while(keepLooping){
		    // read user input
			System.out.print("Enter input: ");
		    String userInput = StudentHelper.ReadInputString();

		    // if user entered "quit", set the looping variable to false
		    if(userInput.equals("quit")){
		        keepLooping = false;
		    }
		    // otherwise, echo the user input
		    else{
		        System.out.println("Echo: " + userInput);
		    }
		}
		// string to show you when you've left the loop and started to run more code
		System.out.println("Rest of the code...\n");
		System.out.println("DONE!");
	}

}
