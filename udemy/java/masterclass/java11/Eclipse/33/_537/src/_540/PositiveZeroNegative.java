package _540;

public class PositiveZeroNegative {

	public static void checkNumber(int number) {
		if (number > 0) {
			System.out.println("positive");
		} else if (number < 0) {
			System.out.println("negative");
		} else {
			System.out.println("zero");
		}
	}
	
	public static void main(String[] args) {

		checkNumber(23);
		checkNumber(-221);
		checkNumber(0);

	}

}
