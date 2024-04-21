package _500;

public class Challenge {

	public static void main(String[] args) {

		byte myByteValue = 120;
		short myShortValue = 2003;
		int myIntValue = 342229;
		
		long myLongValue = 50000L + 10L * (myByteValue + myShortValue + myIntValue);
		System.out.println(myLongValue);
		
		/* Only use long and ints to avoid casting */
//		short myPoorShortValue = 1000 + 10 * (myByteValue + myShortValue + myIntValue);
		short myPoorShortValue = (short)(1000 + 10 * (myByteValue + myShortValue + myIntValue));
		System.out.println(myPoorShortValue);
	}

}
