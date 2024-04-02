package java11.masterclass._504;

public class Primitive {

	public static void main(String[] args) {

		int intValue = 50;
		byte byteValue = 10;
		short shortValue = 20;
		
		long myResult = 50000L + 10L * (intValue + byteValue + shortValue);
		System.out.println(myResult);
		
		short myShortResult = (short)(1000 + 10 * (intValue + byteValue + shortValue));
		System.out.println(myShortResult);

	}

}
