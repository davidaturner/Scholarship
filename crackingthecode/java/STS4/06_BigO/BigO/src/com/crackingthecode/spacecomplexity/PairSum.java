package com.crackingthecode.spacecomplexity;

public class PairSum {

	public static int timeComplexity = 0;
	public static int spaceComplexity = 0;
	
	public static int pairSumSequence(int n) {
		spaceComplexity++;
		int sum = 0;
		for (int i = 0; i < n; i++) {
			timeComplexity++;
			sum += pairSum(i, i + 1);
		}
//		System.out.println(timeComplexity);
//		System.out.println(spaceComplexity);
		return sum;
	}
	
	public static int pairSum(int a, int b) {
		return a + b; // O(1) no stack.
	}
	
	public static void main(String[] args) {

		for(int i = 5; i > 0; i--) {
			pairSumSequence(i);	
			System.out.println("For n:" +i+ " TIME:" +timeComplexity+ " SPACE:" +spaceComplexity);
			timeComplexity = 0;
			spaceComplexity = 0;
		}
		System.out.println("\nTherefore, for n, TIME: O(n) SPACE: O(1)");
	}

}
