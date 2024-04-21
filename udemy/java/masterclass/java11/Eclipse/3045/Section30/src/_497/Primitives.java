package _497;

public class Primitives {

	public static void main(String[] args) {

		int myValue = 10000;
		
		int myMinIntValue = Integer.MIN_VALUE;
		int myMaxIntValue = Integer.MAX_VALUE;
		
		System.out.println("My Minimum Integer Value: " + myMinIntValue);
		System.out.println("My Maximum Integer Value: " + myMaxIntValue);
		System.out.println("My Busted MIN Value: " + (myMinIntValue - 1));
		System.out.println("My Busted MAX Value: " + (myMaxIntValue + 1));
		
		myValue = 2_147_483_647;
		System.out.println(myValue);
	}

}
