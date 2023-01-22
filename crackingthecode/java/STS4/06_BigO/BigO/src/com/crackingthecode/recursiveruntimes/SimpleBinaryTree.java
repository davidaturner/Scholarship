package com.crackingthecode.recursiveruntimes;

public class SimpleBinaryTree {

	static public int numberOfCalls = 0;
	
	static public int simpleCall(int n) {
		
		numberOfCalls++;
		
		// if only one level return 1
		if (n <= 1) {
			return 1;
		}
		
		// return left and right branch
		return simpleCall(n - 1) + simpleCall(n - 1);
	}
	
	public static void main(String[] args) {

		// if N = 4
//		N	Level	# Nodes
//		4	0		1
//		3	1		2
//		2	2		4
//		1	3		8
		
		simpleCall(4);
		System.out.println("Total number of calls: " + numberOfCalls);

//		BigO is therefore:
//		The Summation of 2**level for the four levels - 
//		2**0 + 2**1 + 2**2 + 2**3 = 15
		
//		OR
//		2**n - 1 = 15 calls
		
//		Though there were 15 function calls (1+2+4+8), space wise only the
//		current level (1st or 2nd or 3rd or 4th) exist. At a time.
//		
	}

}
