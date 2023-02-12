package com.crackingthecode.spacecomplexity;

public class Sum {

//	Time is not the only that matters in an algorithm. We might also care about the amount of memory or space 
//	required by an algorithm.
//	
//	Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this 
//	will require O(n) space. If we need a two-dimensional array of size n by n, this will require O(n2) space.
//	
//	Stack space in recursive calls counts, too. For example, code like this would take O(n) time and O(n) space.
	
	public static int timeComplexity = 0;
	public static int spaceComplexity = 0;
	
	public static int run(int n) {
		
		timeComplexity++;	// number of calls of n begin used. 4n calls means we drop the 4x.
		spaceComplexity++; // calls to stack. one extra for 0 level is ignored. n + 1.
		
		//base case
		if (n <= 0) {
			return 0;
		}
		//recursive case.
		return n + run(n-1);
	}
	
	public static void main(String[] args) {
		for(int num=5; num>=1; num--) {
			run(num);
//			System.out.println(run(num));
			System.out.println("For n="+num+": Time:" + timeComplexity + " Space:" + spaceComplexity);	
			timeComplexity = 0; 
			spaceComplexity = 0;
		}
		System.out.println("Time: O(n) Space: O(n)");
	}

}
