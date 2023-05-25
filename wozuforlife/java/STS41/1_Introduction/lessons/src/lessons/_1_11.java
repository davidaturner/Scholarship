package lessons;

public class _1_11 {

	public static void main(String[] args) {
		_1_11.ifs();
		_1_11.ifelses();

	}
	
	public static void ifs() {
		
		boolean thingThatCouldBeTrueOrFalse = true;

		if (thingThatCouldBeTrueOrFalse) {
		    System.out.println("It's all True!");
		}
		
		boolean isCold = true;

		if (isCold) {
		    System.out.println("Wear a coat. It's cold outside!");
		}
	}
	
	public static void ifelses() {
		
	    // declare variables
	    boolean isMarketOpen = true;

	    // if the market is open, print "The market is open!"
	    if (isMarketOpen) {
	        System.out.println("The market is open!");
	    }
	    else {
	        System.out.println("The market is closed.");
	    }
	}

}
