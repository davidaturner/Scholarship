package handsonl1;

public class _1_14 {

	public static void main(String[] args) {
//		_1_14.step1();
//		_1_14.checkIsSunny(true);
//		_1_14.checkIsSunny(false);
//		_1_14.step2();
		_1_14.step3();
	}

	public static void step1() {
		boolean isSunny = true;

		// if it's sunny
		if (isSunny) {
		    // print "Wear sunglasses!"
			System.out.println("Wear sunglasses!");
		}
		// else
		else {
		    // print "Don't wear sunglasses."
			System.out.println("Don't wear sunglasses.");
		}
	}
	
	public static void checkIsSunny(boolean isSunny) {
		// if it's sunny
		if (isSunny) {
		    // print "Wear sunglasses!"
			System.out.println("Wear sunglasses!");
		}
		// else
		else {
		    // print "Don't wear sunglasses."
			System.out.println("Don't wear sunglasses.");
		}		
	}
	
	public static void step2() {
		boolean isSunny = false;
		boolean atBeach = true;

		checkIsSunny(isSunny);
		// if it's sunny
		if (isSunny) {
		    // if at the beach
			if (atBeach) {
		        // print "Wear sunblock!"
				System.out.println("Wear sunblock!");
			}
		    // else
			else {
		        // print "Don't need sunblock."
				System.out.println("Don't need sunblock.");
			}			
		}
	}
	
	public static void step3() {
		boolean isSunny = false;
		boolean atBeach = true;
		
		checkIsSunny(isSunny);
		// if it's sunny
		if ( !isSunny) {
		    // if at the beach
			if (atBeach) {
	        	// print "Come back tomorrow."
				System.out.println("Come back tomorrow.");
			}
		    // else
			else {
		        // print "Don't go to the beach."
				System.out.println("Don't go to the beach.");
			}			
		}
	}

}
