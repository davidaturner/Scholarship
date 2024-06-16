package _537;

public class Main {

	public static void main(String[] args) {
//		System.out.println("10,000 dollars with a interest rate applied at 2% is " +
//							calculateInterestRate(10000., 2.0));
//		System.out.println("10,000 dollars with a interest rate applied at 3% is " +
//				calculateInterestRate(10000., 3.0));
//		System.out.println("10,000 dollars with a interest rate applied at 4% is " +
//				calculateInterestRate(10000., 4.0));
		
		
//		double rate = 2.0;
//		for(int i = 0; i<3; i++) {
//			System.out.println("10,000 dollars with a interest rate applied at " + rate + "% is " +
//			 String.format("%.2f",calculateInterestRate(10000., rate)));	
//			rate += 1.0;
//		}
		
//		double rate = 8.0;
//		for(int i = 5; i>0; i--) {
//			System.out.println("10,000 dollars with a interest rate applied at " + rate + "% is " +
//			 String.format("%.2f",calculateInterestRate(10000., rate)));	
//			rate -= 1.0;
//		}
		
		int startingNumber = 5;
		int primeFound = 0;
		for(int i = 0; i < 100; i++) {
			
			if (primeFound > 3) {
				break;
			}
			if (isPrime(startingNumber)) {
				System.out.println("Prime found: " + startingNumber);
				primeFound++;
			}
			
			startingNumber++;
		}
	}
	
	public static double calculateInterestRate(double amount, double interestRate) {
		return (amount * (interestRate/100));
	}
	
	public static boolean isPrime(int n) {
		
		if (n == 1) {
			return false;
		}

		for(int i=2; i<= (long)Math.sqrt(n); i++) {
//		for(int i=2; i<=n/2; i++) {
			if (n % i == 0) {
				return false;
			}
		}
		
		return true;
	}

}
