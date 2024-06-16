package _543;

public class Main {

	public static void main(String[] args) {

//		String numberAsAString = "2018";
		String numberAsAString = "2018.125";
		System.out.println("numberAsAString = " + numberAsAString);
		
//		int number = Integer.parseInt(numberAsAString);
		double number = Double.parseDouble(numberAsAString);
		System.out.println("number = " + number);
		
		numberAsAString += 1;
		number += 1;
		
		System.out.println("numberAsAString = " + numberAsAString);	
		System.out.println("number = " + number);

	}

}
