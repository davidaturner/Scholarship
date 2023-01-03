package com.wozu._2.arrays;

public class TheBeatles {

	public static void main(String[] args) {
		Example();
	}
	
	public static void Example() {
		
		// individual variables for musician names
		String musician1 = "John";
		String musician2 = "George";
		String musician3 = "Paul";
		String musician4 = "Ringo";
		System.out.println(musician1);
		System.out.println(musician2);
		
		String[] musicians = {"John", "George", "Paul", "Ringo"};

		// print the first element in the array
		System.out.println(musicians[0]);
		System.out.println(musicians[1]);
		// length
		System.out.println(musicians.length);
	}

}
