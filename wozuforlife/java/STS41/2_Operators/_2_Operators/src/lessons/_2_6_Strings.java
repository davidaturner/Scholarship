package lessons;

public class _2_6_Strings {

	public static void main(String[] args) {

		concatenation();
		length();
		lowercaseUPPERCASE();

	}
	
	public static void concatenation() {
		
		String morningGreeting = "Good Morning";
		String name = "Alex";
		System.out.println(morningGreeting);
		System.out.println(name);
		System.out.println(morningGreeting + " " + name);
		
		boolean isProgrammer = true;
		System.out.println("Am I a programmer? " + isProgrammer);

		int age = 30;
		System.out.println("My age: " + age);
	}
	
	public static void length() {
		
		String morningGreeting = "Good Morning";
		System.out.println(morningGreeting.length());
	}
	
	public static void lowercaseUPPERCASE() {
		
		String morningGreeting = "Good Morning";
		System.out.println(morningGreeting.toUpperCase());
		System.out.println(morningGreeting.toLowerCase());
	}

}
