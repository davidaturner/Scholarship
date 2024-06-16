package _542;

public class Challenge {

	public static int ERROR_VALUE = -1;
	public static void main(String[] args) {

		System.out.println(sumDigit(12));
		System.out.println(sumDigit(125));
		System.out.println(sumDigit(-125));
		System.out.println(sumDigit(32123));
		System.out.println(sumDigit(13000));
		System.out.println(sumDigit(8));
		System.out.println(sumDigit(10));
	}

	public static int sumDigit(int number) {
		
		if (number < 10) {
			return -1;
		}
		
		int sum = 0;
		// 125 = 125 / 10 = 12 * 10 = 120, 125 - 120 = 5 digit least significant
		
		while (number > 0) {
			int digit = number % 10; // 125 % 10 = 5
			sum += digit;	// add 5 to sum
			
			number /= 10; // 125 / 10 = 12
		}
		
		return sum;
		
	}
	public static int sumDigitSlowerr(int number) {
		
		if (number < 10) {		
			return ERROR_VALUE;
		}
	
		// if number = 12 then sum = 1 + 2 = 3
		// if number = 125 then sum = 1 + 2 + 5 = 8
		int sum = 0, remainder = number;
		while (remainder >= 10) {
			int divideBy = divisor(remainder);
			int digit = remainder / divideBy;
			remainder %= divideBy;
			sum += (remainder > 10)?digit: digit+ remainder;
		}
	
		return sum;
			
	}
	
	public static int divisor(int number) {
		
		int divideBy = 1, remainder = 0;
		
		if (number >= 10) {
			
			remainder = number;
			while(remainder >= 10) {
				divideBy *= 10;
				remainder /= 10;
			}
		}
		return divideBy;
	}
}
