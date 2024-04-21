package _535;

public class Main {

	public static void main(String[] args) {

//		int value = 3;
		int value = 5;
//		if (value == 1) {
//			System.out.println("value == 1");
//		} else if (value == 2) {
//			System.out.println("value == 2");
//		} else {
//			System.out.println("value was not 1 nor 2");
//		}
		
		System.out.println("Using switch!");
		switch (value) {
			case 1:
				System.out.println("value == 1");
				break;
			case 2:
				System.out.println("value == 2");
				break;
			case 3: case 4:
				System.out.println("value is either 3 or 4");
				break;
			default:
//				System.out.println("value was not 1 nor 2");
				System.out.println("value was not 1, 2, 3 nor 4");
				break;
		}

	}

}
