package lessons;

public class _2_2_Operators {

	public static void main(String[] args) {
		
		System.out.println("Hello, World!");
		_1_boolean();
		_2_string();
		_3_ifelse();
		_4_inequality();
		_5_and();
		_6_or();
		_7_not();
		_8_less_than();
		_9_greater_than();
	}

	public static void _1_boolean() {
		
		// this will evaluate to a boolean value
//		a == b;
		
		int a = 5;
		int b = 5;
		System.out.println(a == b);
		
		b = 6;
		boolean result = (a == b);
		System.out.println(result);
	
	}
	
	public static void _2_string() {
		
		// All 3 vars have the same string value: My dog Fido.
		String var1 = "My dog Fido.";
		String var2 = "My dog Fido.";
		String var3 = new String("My dog Fido.");

		// TRUE! because both are assigned to the same literal
		boolean equal12 = (var1 == var2);
		System.out.println(equal12);
		
		// FALSE! `var3` is created using `new`
		boolean equal23 = (var2 == var3);
		System.out.println(equal23);
		
		// FALSE! case (capitalization) matters!
		equal12 = var1.equals(var2);
		System.out.println(equal12);
		
		// TRUE! both variables contain the same string value
		boolean equal13 = var1.equals(var3);
		System.out.println(equal13);
		
		var2 = new String("My dog Spot.");   // different dog name
		System.out.println(var2);
		
		// Test for equality
		// FALSE! "var1" and "var2" are not equal
		equal12 = var1.equals(var2);
		System.out.println(equal12);
		
		// Test for Inequality (note the not operator)
		// TRUE! "var1" does NOT (!) equal "var2"
		boolean notEqual12 = !var1.equals(var2);
		System.out.println(notEqual12);
	}
	
	public static void _3_ifelse() {
		
		// declare the variables needed
		int rating = 4;

		// if the user rated the restaurant 5-stars, print "This food is the best! I could eat 
		// this every day."
		if(rating == 5){
		    System.out.println("This food is the best! I could eat this every day.");
		}
		// if the user rated the restaurant 4-stars, print "Good meal."
		else if(rating == 4){
		    System.out.println("Good meal.");
		}
		// if the user rated the restaurant 3-stars, print "It was OK."
		else if(rating == 3){
		    System.out.println("It was OK.");
		}
		// if the user rated the restaurant 2-stars, print "I did not like this, but it's cheap."
		else if(rating == 2){
		    System.out.println("I did not like this, but it's cheap.");
		}
		
//		This last else block is known as an edge case in the software testing world. Now if you 
//		were to update this code to check for each value explicitly, you wouldn't have this edge 
//		case. So, do just that. Instead of the else at the end, use an else if to check if the 
//		rating is one star.
//		else{
//		    System.out.println("I'd rather eat dirt.");
//		}
		
		// if the user rated the restaurant 1-star,  print "I'd rather eat dirt."
		else if(rating == 1){
		    System.out.println("I'd rather eat dirt.");
		}
	}
	
	public static void _4_inequality() {
		
		// this will evaluate to a boolean value
//		a != b
		
		int frankAge = 30;
		int kevinAge = 40;
		System.out.println(frankAge != kevinAge);
		
		int secondsPerMinute = 60;
		int minutesPerHour = 60;
		System.out.println(secondsPerMinute != minutesPerHour);

	}
	
	public static void _5_and() {
		
		boolean isHungry = true;
		boolean isRestaurantOpen = true;

		if(isHungry && isRestaurantOpen){
		    System.out.println("Go to the restaurant!");
		}
		else{
		    System.out.println("Don't go to the restaurant.");
		}
	}
	
	public static void _6_or() {
		
		boolean isSleepy = false;
		boolean isLibraryClosed = true;

		if(isSleepy || isLibraryClosed) {
		    System.out.println("You should leave now.");
		}
		else {
		    System.out.println("Keep on studying!");
		}
		
		isSleepy = false;
		isLibraryClosed = true;
		boolean isBatteryDead = true;

		if(isSleepy || isLibraryClosed || isBatteryDead) {
		    System.out.println("You should leave now.");
		}
		else {
		    System.out.println("Keep on studying!");
		}
		
		isSleepy = false;
		isLibraryClosed = false;
		isBatteryDead = false;

		if(isSleepy || isLibraryClosed || isBatteryDead) {
		    System.out.println("You should leave now.");
		}
		else {
		    System.out.println("Keep on studying!");
		}
		
		isSleepy = true;
		isLibraryClosed = true;
		isBatteryDead = false;

		if(isSleepy || isLibraryClosed && isBatteryDead){
		    System.out.println("You should leave now.");
		}
		else{
		    System.out.println("Keep on studying!");
		}
		
//		As you've just seen, Java does not go from left to right in the expression. In 
//		Java, operators have precedence. This means it will evaluate some parts (e.g. &&) 
//		before others (e.g. ||). Since the && operator has higher precedence than the || 
//		operator, Java first evaluates the isLibraryClosed && isBatteryDead which turns out 
//		to be false. Then, it performs another evaluation with isSleepy and the evaluated 
//		false value that was determined in the previous sentence, resulting in a logical 
//		statement that looks like this: isSleepy || false. This evaluates to true. Since 
//		this final result is true, Java will print "You should leave now." to the console.
		
	}
	
	public static void _7_not() {
		
		// not a
//		!a
		
		System.out.println(true);
		System.out.println(!true);
		
		boolean isDaytime = true;
		System.out.println(!isDaytime);
	}
	
	public static void _8_less_than() {
		
		int a = 2;
		int b = 4;
		if(a < b){
		    System.out.println("a is less than b");
		}
		
		a = 4;
		if(a < b){
		    System.out.println("a is less than b");
		}
		
		if(a <= b){
		    System.out.println("a is less than or equal to b");
		}
	}
	
	public static void _9_greater_than() {
		
		// declare the user's age in an integer variable
		int userAge = 17;

		// if the user's age at least 18 (greater than or equal to 18), then they can purchase tickets.
		if(userAge >= 18){
		    System.out.println("Here are your tickets. Enjoy the movie!");
		}
		// otherwise, (they are not at least 18) they cannot purchase the tickets.
		else{
		    System.out.println("Sorry, you are too young to purchase tickets for this movie.");
		}
	}
}
