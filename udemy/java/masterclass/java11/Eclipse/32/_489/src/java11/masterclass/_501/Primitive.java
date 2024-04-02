package java11.masterclass._497;

public class Primitive {

	public static void main(String[] args) {

		// eight types: boolean, byte, char, short, int, long, float and double.
		int myValue = 10000;
		System.out.println(myValue);
		
		// width = 32
		int myIntMaxValue = Integer.MAX_VALUE;
		int myIntMinValue = Integer.MIN_VALUE;
		System.out.println("Integer Maximum Value = " + myIntMaxValue);
		System.out.println("Integer Minimum Value = " + myIntMinValue);
		System.out.println("BUSTED: Add 1 to Maximum = " + (Integer.MAX_VALUE + 1)); // Overflow
		System.out.println("BUSTED: Add -1 to Minimum = " + (Integer.MIN_VALUE - 1)); // Underflow
		
		myIntMaxValue = 2_147_483_647;
		System.out.println("Integer Maximum Value = " + myIntMaxValue);

	}

}
