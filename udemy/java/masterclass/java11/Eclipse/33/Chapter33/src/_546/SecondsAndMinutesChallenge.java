package _546;

public class SecondsAndMinutesChallenge {

	public static final String INVALID = "Invalid value";
	
	private static String getDurationString(int minutes, int seconds) {
		return (validate(minutes, seconds)? calculateHMS(minutes, seconds) : INVALID);
	}

	private static String getDurationString(int seconds) {
		if (seconds >= 0) {
			int m = seconds / 60;
			int s = seconds % 60;
			return getDurationString(m, s);
		}

		return INVALID;
	}
	
	private static String calculateHMS(int minutes, int seconds) {
		int h = minutes / 60;
		int m = minutes % 60;
		int s = seconds;
		
//		return h + "h " + m + "m " + s + "s ";
		return String.format("%02dh ", h) + String.format("%02dm ", m) + String.format("%02ds ", s);
	}
	
	public static boolean validate(int minutes, int seconds) {
		
		return (minutes >= 0 && (seconds >= 0 && seconds <=60));
	}
	

	
	public static void main(String[] args) {

		System.out.println("NEW =>  " + getDurationString(2, 31));
		System.out.println(getDurationString(60, 50));
		System.out.println(getDurationString(245, 31));
		System.out.println(getDurationString(65, 45));
		System.out.println(getDurationString(-1, 155));
		System.out.println(getDurationString(3425));
		System.out.println(getDurationString(8425));
		System.out.println(getDurationString(-7));
	}

}
