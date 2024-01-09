package java11.masterclass._522;

public class FloatAndDouble {

	public static void main(String[] args) {
		// float 32 bits (4 bytes)
		float myMinFloatValue = Float.MIN_VALUE;
		float myMaxFloatValue = Float.MAX_VALUE;
		System.out.println("My Min Float Value = " + myMinFloatValue);
		System.out.println("My Max Float Value = " + myMaxFloatValue);
		// double 64 bits (8 bytes)
		double myMinDoubleValue = Double.MIN_VALUE;
		double myMaxDoubleValue = Double.MAX_VALUE;
		System.out.println("My Min Double Value = " + myMinDoubleValue);
		System.out.println("My Max Double Value = " + myMaxDoubleValue);
		
		int myIntValue = 5;
		float myFloatValue = 5;
		double myDoubleValue = 5;

		System.out.println("My Int Value = " + myIntValue);
		System.out.println("My Float Value = " + myFloatValue);
		System.out.println("My Double Value = " + myDoubleValue);
		
		myIntValue = 5 / 2;
		myFloatValue = 5f / 2f;
		myDoubleValue = 5d / 2d;

		System.out.println("My Int Value = " + myIntValue);
		System.out.println("My Float Value = " + myFloatValue);
		System.out.println("My Double Value = " + myDoubleValue);
		
		myIntValue = 5 / 3;
		myFloatValue = 5f / 3f;
		myDoubleValue = 5d / 3d;

		System.out.println("My Int Value = " + myIntValue);
		System.out.println("My Float Value = " + myFloatValue);
		// Whenever possible do not use float.
		// Machines running Java are 64bit.
		// Java functions take and return 64bit.
		// So, generally: faster and better performance than float.
		System.out.println("My Double Value = " + myDoubleValue);
		
		

	}

}
