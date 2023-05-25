package lessons;

public class _3_2_Arrays {

	public static void main(String[] args) {
		
		// individual variables for musician names
		String musician1 = "John";
		String musician2 = "George";
		String musician3 = "Paul";
		String musician4 = "Ringo";
		
		String[] musicians = {"John", "George", "Paul", "Ringo"};
		
		// print the first element in the array
		System.out.println(musicians[0]);
		
		// print the second element in the array
		System.out.println(musicians[1]);
		
		System.out.println(musicians.length);
		
		// declare a string array of student names
		String[] students = {"Joshua Alexander", "Carol Thomas", "Marion Green", "Edward Johnson", "Katherine Jones", "Jared Williams"};

		// print the first element in the array
		System.out.println(students[0]);
		
		String[] groceryList = new String[4];
		groceryList[0] = "bread";
		groceryList[1] = "eggs";
		groceryList[2] = "milk";
		groceryList[3] = "tea";
		System.out.println(groceryList[1]);
		
		groceryList[1] = "beans";
		System.out.println(groceryList[1]);
		
		int[] highestArizonaTemperatures = {120, 122, 121, 118, 119};
		System.out.println(highestArizonaTemperatures[0]);
		System.out.println(highestArizonaTemperatures[4]);
		
		// print the third element in the array
		System.out.println(highestArizonaTemperatures[2]);

	}

}
