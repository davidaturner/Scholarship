package com.wozu._2.operators;

public class HierarchyOps {

	/*
	 * Not all operators are treated equally. This means some are evaluated before 
	 * others. You will look at a modified version of the library code example again, 
	 * which is posted below for your convenience.
	 */
	public static void main(String[] args) {
		deadBattery(true, true, false);
		deadBatteryAbstraction(false, false, true);

	}
	
	public static void deadBattery(boolean isSleepy, boolean isLibraryClosed, boolean isBatteryDead) {

		/*
		As you've just seen, Java does not go from left to right in the expression. In 
		Java, operators have precedence. This means it will evaluate some parts (e.g. &&) 
		before others (e.g. ||). Since the && operator has higher precedence than 
		the || operator, Java first evaluates the isLibraryClosed && isBatteryDead which 
		turns out to be false. Then, it performs another evaluation with isSleepy and 
		the evaluated false value that was determined in the previous sentence, resulting 
		in a logical statement that looks like this: isSleepy || false. This evaluates 
		to true. Since this final result is true, Java will print "You should leave now." 
		to the console.
		*/
		if(isSleepy || isLibraryClosed && isBatteryDead){
		    System.out.println("You should leave now.");
		}
		else{
		    System.out.println("Keep on studying!");
		}
	}
	
	public static void deadBatteryAbstraction(boolean a, boolean b, boolean c) {

		// this is true
		System.out.println(a || b || c);

		// this is false
		System.out.println(a || b && c);

		/*
		    Here's the breakdown:

		    a || b && c
		    a || (b && c)
		    a || (false && true)
		    a || false
		    false || false
		    false
		*/
	}
	

}
