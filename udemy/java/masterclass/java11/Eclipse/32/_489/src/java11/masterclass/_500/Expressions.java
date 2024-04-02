package java11.masterclass._500;

public class Expressions {

	public static void main(String[] args) {

		int myFirstNumber = (5 + 10) + (2 * 10);
		int mySecondNumber = 12;
//		int myThirdNumber = 6;
		int myThirdNumber = myFirstNumber * 2;
		
		int myTotal = myFirstNumber + mySecondNumber + myThirdNumber;
		System.out.println(myTotal);
		
		int myLastOne = 1000 - myTotal;
		System.out.println(myLastOne);

	}

}
