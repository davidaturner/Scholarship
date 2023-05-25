package lessons;

import java.util.Scanner;

public class _3_4_Loops {

	public static class StudentHelper {
	    @SuppressWarnings("resource")
	    public static String ReadInputString(){
	        // declare a new Scanner object
	        Scanner scan = new Scanner(System.in);

	        // read in user input and store it in the scanned variable
	        String scanned = scan.nextLine();

	        // return the result to wherever the "StudentHelper.ReadNextLine()" is called
	        return scanned;
	    }
	}
	
	public static void main(String[] args) {

//		whileLoop1();
//		whileLoop2();
//		doWhileLoop();
		forLoop();
//		enhancedForLoop();

	}
	
	public static void whileLoop1() {
		
		boolean isItTrue = true;
		String userInput;
		while(isItTrue){
			System.out.print("Enter: ");
		    // my input: "Hi!"
		    userInput = StudentHelper.ReadInputString();
		    System.out.println("Echo: " + userInput);

		    // setting this variable to false will tell the loop to stop running
		    isItTrue = false;
		}
		System.out.println("Rest of the code...");
	}
	
	public static void whileLoop2() {
		
		// a boolean variable to be used to determine if you should keep looping
		boolean keepLooping = true;

		// loop if the looping variable is true
		while(keepLooping){
			System.out.print("Enter: ");
		    // read user input
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
		System.out.println("Rest of the code...");
	}
	
	public static void doWhileLoop() {
		
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
	
	public static void forLoop() {
		
		// start out with a counter value at 10
		// while the counter value is greater than 0, print the value and subtract 1
		for(int count = 10; count > 0; count--){
		    System.out.println(count);
		}

		// once the loop is done, print "Lift Off!"
		System.out.println("Lift Off!");
	}
	
	public static void enhancedForLoop() {
		
		String[] myArray = { "One", "Two", "Three" };
		
		for(String val : myArray) {
		    System.out.println(val);
		}
	}

}
