package java11.masterclass._521;

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
		
//		int myIntPartial = 5.25; // error
		
//		float myFloatPartial = 5.25; // error
		float myFloatPartial1 = (float) 5.25; // not recommended
		float myFloatPartial2 = 5.25f;
		
		double myDoublePartial1 = 5.25;	// default type
		double myDoublePartial2 = 5.25d;
		System.out.println("My Float Partials = " + myFloatPartial1 + " " + myFloatPartial2);
		System.out.println("My Double Partials = " + myDoublePartial1 + " " + myDoublePartial2);
	}

}
