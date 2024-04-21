package _532;

public class Codeblocks {

	public static void main(String[] args) {
//		boolean isGameOver = false;
		boolean isGameOver = true;
//		int score = 5000;
//		int score = 4000;
//		int score = 1000;
		int score = 6000;
		int levelCompleted = 5;
		int bonusMultiplier = 100;
		
		//example of a code block.
		if (score == 5000) {
			System.out.println("Your score is 5000!");
		} else if (score < 5000 && score > 1000) {
			System.out.println("Your score is less than 5000 but more than 1000.");			
		}
		else if (score <= 1000) {
			System.out.println("Your score is less than or equal to 1000.");				
		}
		else {
			System.out.println("Got here!");			
		}

		// create variable in code block.
		if (isGameOver == true) {
			int finalScore = score + (levelCompleted * bonusMultiplier);
			System.out.println("Your final score is " + finalScore);	
		}
	}

}
