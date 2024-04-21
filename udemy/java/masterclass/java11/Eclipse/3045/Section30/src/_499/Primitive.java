package _499;

public class Primitive {

	public static void main(String[] args) {

		// 32 bits
		int myMinIntValue = Integer.MIN_VALUE;
		int myMaxIntValue = Integer.MAX_VALUE;	
		System.out.println("My Minimum Integer Value: " + myMinIntValue);
		System.out.println("My Maximum Integer Value: " + myMaxIntValue);
		
//		System.out.println("My Busted MIN Value: " + (myMinIntValue - 1));
//		System.out.println("My Busted MAX Value: " + (myMaxIntValue + 1));

		// 8 bits
		byte myMinByteValue = Byte.MIN_VALUE;
		byte myMaxByteValue = Byte.MAX_VALUE;	
		System.out.println("My Minimum Byte Value: " + myMinByteValue);
		System.out.println("My Maximum Byte Value: " + myMaxByteValue);

		// 16 bits
		short myMinShortValue = Short.MIN_VALUE;
		short myMaxShortValue = Short.MAX_VALUE;	
		System.out.println("My Minimum Short Value: " + myMinByteValue);
		System.out.println("My Maximum Short Value: " + myMaxByteValue);
		
		//64 bits
		long myMinLongValue = Long.MIN_VALUE;
		long myMaxLongValue = Long.MAX_VALUE;	
		System.out.println("My Minimum Integer Value: " + myMinIntValue);
		System.out.println("My Maximum Integer Value: " + myMaxIntValue);
		
		int myValue = myMinIntValue / 2;
		
		/* Note doing arithmetic in Java assumes return value of int. */
		byte myByteValue = (byte)(myMinByteValue / 2);
		
		short myShortValue = (short)(myMinShortValue / 2);
		
		

	}

}
