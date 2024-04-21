package _545;

public class Summer {

	public static int sum(int a, int b) {
		return a + b;
	}
	
	public static int sum(int a, int b, int c) {
		return sum(sum(a, b), c);
	}
	
	public static int sum(int a, int b, int c, int d) {
		return sum(sum(a, b, c), d);
	}
	
	public static void main(String[] args) {

		int result = 0;
		result = sum(1, 2);
		System.out.println("1 + 2 = " + sum(1,2));
		System.out.println("1 + 2 + 3 = " + sum(1,2,3));
		System.out.println("1 + 2 + 3 + 4 = " + sum(1,2,3,4));

	}

}
