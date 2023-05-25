package lessons;

public class _2_5_Activity {

	public static void main(String[] args) {

		activity1();
		activity2();

	}

	public static void activity1() {
		
		double cost = 3.45;
		double deliveryFee = 0.34;
		
		System.out.println(newPayments(cost, deliveryFee));
	}
	
	public static void activity2() {
		
		double a = 10;
		double b = 12;
		
		System.out.println(getAverage(a, b));
	}
	
	public static double newPayments(double cost, double deliveryFee) {
		
		return (cost + deliveryFee) * 100;
	}
	
	public static double getAverage(double a, double b) {
		
		double average = (a + b) / 2;
		return average;
	}
}
