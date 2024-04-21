package _535;

public class TheChallenge {

	public static void main(String[] args) {
		// create a new switch statement using char instead of int
		// create a new char
		// create switch to test A, B, C, D, E
		// display letter if found and break
		// display not found if char is not A, B, C, D, E
		
		char charValue = 'F';
		switch (charValue) {
		
			case 'A':
				System.out.println("Value = 'A'");
				break;
			case 'B':
				System.out.println("Value = 'B'");
				break;
			case 'C': case 'D': case 'E':
				System.out.println("Value = '" + charValue + "'");
				break;
			default:
				System.out.println("Unrecognizable Value = '" + charValue + "'");
				break;
			
		}
		
//		checkCalendar();

	}
	
	public static void checkCalendar() {
		
//		String month = "January";
//		String month = "June";
//		String month = "September";
//		String month = "JanUary";
		String month = "jUNE";
		switch (month.toLowerCase()) {
		
			case "january":
				System.out.println("Month is January.");
				break;
			case "june":
				System.out.println("Month is June.");
				break;
			default:
				System.out.println("I don't know.");
				break;
			
		}
	}

}
