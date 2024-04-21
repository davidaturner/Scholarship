package _541;

public class SpeedConverter {

	public static long toMilesPerHour(double kilometersPerHour) {
		if (kilometersPerHour < 0) {
			return (long) -1;
		}
		return Math.round(kilometersPerHour*0.621371);
		
	}
	
	public static void printConversion(double kilometersPerHour) {

		long milesPerHour = toMilesPerHour(kilometersPerHour);
		if (milesPerHour == -1) {
			System.out.println("Invalid Value");
		}
		else {
			System.out.println(kilometersPerHour + " km/h = " + milesPerHour + " mi/h");
//			System.out.printf("%.3f km/h = %d mi/h \n", kilometersPerHour, milesPerHour);
		}
	}
	public static void main(String[] args) {
		System.out.println("Miles = "  + toMilesPerHour(1.5));
//		System.out.println(toMilesPerHour(10.25));
//		System.out.println(toMilesPerHour(-5.6));
//		System.out.println(toMilesPerHour(25.42));
//		System.out.println(toMilesPerHour(75.114));
		
		printConversion(1.5);
		printConversion(10.25);
		printConversion(-5.6);
		printConversion(25.42);
		printConversion(75.114);

	}

}
