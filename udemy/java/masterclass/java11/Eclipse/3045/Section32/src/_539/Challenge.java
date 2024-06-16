package _539;

public class Challenge {

	public static void main(String[] args) {

		int result = 0;
		for (int i=1, found=0; i<1000; i++) {
			
			if (found == 5) {
				break;
			}
			
			if ( (i % 3 == 0) && (i % 5 == 0) ) {
				System.out.println("Found! " + i);
				result += i;
				found++;
			}			
		}
		
		System.out.println("Sum = " + result);
		
	}

}
