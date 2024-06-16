package _540;

public class Main {

	public static void main(String[] args) {

		int count = 1;
		while (count != 6) {
			System.out.println("Count value is " + count);
			count++;
		}
		
		// is equivalent to 
		
		for(count=1; count != 6; count++) {
			System.out.println("Count value is " + count);			
		}

		// is equivalent to 
		count = 1;
		do {
			System.out.println("Count value is " + count++);				
		} while (count != 6);

	}

}
