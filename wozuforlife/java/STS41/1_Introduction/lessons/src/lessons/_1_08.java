package lessons;

public class _1_08 {

	public static void main(String[] args) {
//		_1_08.variables();		
//		_1_08.strings();
//		_1_08.chars();
//		_1_08.ints();
//		_1_08.doubles();
//		_1_08.floats();
//		_1_08.booleans();
		_1_08.finals();
		
	}
	
	public static void variables() {
		
//		There are a few things to know when you want to create a name for your variable.
//
//		Meaning: When creating a name for a variable, it is important to give the 
//		variable a meaningful name. For instance, if you wanted to store the number of 
//		days in a week, you might call the variable daysOfTheWeek rather than thing. This 
//		makes it easier for you to identify what the variable is.
//
//		Characters: There are rules for naming variables:
//
//		Variable names must begin with a letter, a dollar sign $, or an underscore character _.
//		Subsequent characters may be letters, digits, dollar signs, or underscore characters.
//		cAsE sEnSiTiVe: Variable names are case sensitive. For instance, daysOfTheWeek and 
//		DAYSOFTHEWEEK are considered two different variables.
//
//		Convention: You may have noticed the strange capitalization for the variable 
//		names (e.g. daysOfTheWeek). This style of naming variables is known as camel case. 
//		When naming variables with compound words, the first word is all lowercase, and the 
//		first letters of each subsequent word are capitalized. While not required, most Java 
//		programs are written using this convention.
		
	    String message;
	    message = "Hello World!";
	    System.out.println(message);
	    System.out.println(message);
	    System.out.println(message);
	}
	
	public static void strings() {
		String helloworld = "Hello, world!";
		System.out.println(helloworld);
		
	    String message = "He was taking a \"nap\" in the back of the class";
	    System.out.println(message);
	}
	
	public static void chars() {
	    char letter = 'E';
	    System.out.println(letter);

//	    Before you go any further you will need to update a setting in Eclipse. In order 
//	    to view Unicode, you must update the file to accept Unicode. To do this, follow the 
//	    below directions:
//
//	    	1. Click on the down arrow located next to the Run button and select Run Configurations.
//	    	2. On the next page select your file on the left hand side that contains the Unicode.
//	    	3. With the file selected, in the menu bar select the Common tab.
//	    	4. Select the Other radio button under Encoding and select UTF-8 from the drop down list.
//	    	5. Click Apply
//	    	6. Run the project
	    	
	    char altLetter = '\u03A9';
	    System.out.println(altLetter);
	}
	
	public static void ints() {
		
		int daysOfTheWeek = 7;
		int caloriesConsumed = 2000;
		int populationOfChinaIn2017 = 1371000000;
		System.out.println(daysOfTheWeek);
		System.out.println(caloriesConsumed);
		System.out.println(populationOfChinaIn2017);
		
		int age = 26;
		System.out.println(age);
	   
		int sum = 2 + 2;
		int newSum = sum;

		System.out.println(sum);
		System.out.println(newSum);		   
	}
	
	public static void doubles() {
		double pi = 3.14;
		System.out.println(pi);
	}
	
	public static void floats() {
		float pi = 3.14f;
		/*
			This might seem strange at first, but this informs Java that you want to 
			store a float value (smaller precision) rather than a double value 
			(larger precision).
		 */
		System.out.println(pi);
	}
	
	public static void booleans() {
		boolean isUserLoggedIn = true;
		boolean isRestaurantOpen = false;
		boolean isBatteryLow = true;
		System.out.println(isUserLoggedIn);
		System.out.println(isRestaurantOpen);
		System.out.println(isBatteryLow);
		
		boolean isEclipseOpen = true;
		System.out.println(isEclipseOpen);
	}
	
	public static void finals() {
		   final int HOURS_IN_A_DAY = 24;
		   System.out.println(HOURS_IN_A_DAY);
	}

}

