package com.crackingthecode.droptheconstants;

public class MinMax {

//	Big O just describes the rate of increase.
//	
//	Many will see code that has two non nested for loops and continue this O(2n). They think they're 
//	being more 'precise'. They are not.
//	
//	BigO allows us to express how the runtime scales. We accept that some O(n) algorithms MAY be faster 
//	than others. Ditto BigO O(n2).
	
	public static int timeComplexity = 0;
	public static int spaceComplexity = 0;
	
	public static int runOnce(int n) {
		spaceComplexity++;
		int result = 0;
		for(int i=1; i<n; i++) {
			timeComplexity++;
			result += i;
		}
		return result;
	}
	
	public static int runTwice(int n) {
		int result = 0;
		result += runOnce(n);
		result += runOnce(n);		
		return result;
	}
	
	public static void main(String[] args) {

		for(int i=5; i>0; i--) {
			runOnce(i);
			int t1 = timeComplexity;
			int s1 = spaceComplexity;
			timeComplexity = 0;
			spaceComplexity = 0;
			runTwice(i);
			int t2 = timeComplexity;
			int s2 = spaceComplexity;
			timeComplexity = 0;
			spaceComplexity = 0;
			System.out.println("For n:" +i+ " tRUNONCE:" +t1+ " tRUNTWICE:" +t2);
		}
		
		System.out.println("Too complicated to prove O(n) is always faster than O(2n).");
		System.out.println("Describe instead speed to scale. Drop the constant.");

	}

}
