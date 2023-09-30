package java11.masterclass._498;

public class Primitive {

	public static void main(String[] args) {
		// eight types: boolean, byte, char, short, int, long, float and double.
		int myValue = 10000;
		
		// width = 32
		int myIntMaxValue = Integer.MAX_VALUE;
		int myIntMinValue = Integer.MIN_VALUE;
		System.out.println("Integer Maximum Value = " + myIntMaxValue);
		System.out.println("Integer Minimum Value = " + myIntMinValue);
		System.out.println("BUSTED: Add 1 to Maximum = " + (Integer.MAX_VALUE + 1)); // Overflow
		System.out.println("BUSTED: Add -1 to Minimum = " + (Integer.MIN_VALUE - 1)); // Underflow
		
		myIntMaxValue = 2_147_483_647;
		System.out.println("Integer Maximum Value = " + myIntMaxValue);
		
		// width = 8
		byte myByteMaxValue = Byte.MAX_VALUE;
		byte myByteMinValue = Byte.MIN_VALUE;
		System.out.println("Byte Maximum Value = " + myByteMaxValue);
		System.out.println("Byte Minimum Value = " + myByteMinValue);
		
		// width = 16
		short myShortMaxValue = Short.MAX_VALUE;
		short myShortMinValue = Short.MIN_VALUE;
		System.out.println("Short Maximum Value = " + myShortMaxValue);
		System.out.println("Short Minimum Value = " + myShortMinValue);
		
		long myLongValue = 100L;
		
		// width = 64
		long myLongMaxValue = Long.MAX_VALUE;
		long myLongMinValue = Long.MIN_VALUE;
		System.out.println("Long Maximum Value = " + myLongMaxValue);
		System.out.println("Long Minimum Value = " + myLongMinValue);
		
		myLongValue = 2_147_483_647_234L;
		System.out.println("Integer Maximum Value = " + myLongValue);
		
		// casting
		int myNewValue = myIntMinValue / 2;
		byte myNewByteValue = (byte)(myByteMinValue / 2);
		short myNewShortValue = (short)(myShortMinValue / 2);
		

	}

}
