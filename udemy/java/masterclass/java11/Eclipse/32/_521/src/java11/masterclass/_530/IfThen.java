package java11.masterclass._530;

public class IfThen {

	public static void main(String[] args) {

		int topScore = 100;
		
		if (topScore == 100) {
			System.out.println("You got top score!");
		}
		
		if (topScore > 83) {
			System.out.println("You got top score!");
		}
		
		if (topScore >= 83) {
			System.out.println("You got top score!");
		}
		
		if (topScore < 83) {
			System.out.println("You don't got top score!");
		}

		int myScore = 83;
		if ((myScore > 42) && (myScore <= 100)) {
			System.out.println("Good score, sir!");
		}
		
		if ((myScore > 42) || (myScore <= 100)) {
			System.out.println("Not bad a score, sir!");
		}
	}

}
