package java11.masterclass._527;

public class Operations {

	public static void main(String[] args) {
		
		int result = 1 + 2;
		System.out.println("1 + 2 = " + result);
		
		int previous = result;		
		result++;
		System.out.println(previous + " + 1 = " + result);

		previous = result;
		result--;
		System.out.println(previous + " - 1 = " + result);
		
		previous = result;		
		result = result - 1;
		System.out.println(previous + " - 1 = " + result);
		
		previous = result;
		result *= 10;
		System.out.println(previous + " * 10 = " + result);

		previous = result;
		result /= 5;
		System.out.println(previous + " / 5 = " + result);
		
		previous = result;
		result %= 3;
		System.out.println(previous + " % 3 = " + result);
		


	}

}
