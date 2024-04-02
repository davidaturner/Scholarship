package _541;

public class Functions {

	public static void main(String[] args) {

//		calculateScore();
		boolean isGameOver = true;
		
		int score = 1000;
		int levelCompleted = 8;
		int bonusScore = 200;
		
//		calculateScore(isGameOver, score, levelCompleted, bonusScore);
//		
//		calculateScore(true, 2000, 5, 1000);
		
		if (isGameOver) {
//			int finalScore = score + (levelCompleted * bonusScore);
			int finalScore = calculateScore(score, levelCompleted, bonusScore);
			System.out.println("Game over. Your final score is " + finalScore);
		} else {
			System.out.println("Game not over. Final score unavailable.");
		}
//		if (isGameOver) {
//			int finalScore = score + (levelCompleted * bonusScore);
//			System.out.println("Your final score is " + finalScore);
//		}
	}
	
//	public static void calculateScore() {
//		boolean isGameOver = true;
//		
//		int score = 1000;
//		int levelCompleted = 8;
//		int bonusScore = 200;
//		
//		if (isGameOver) {
//			int finalScore = score + (levelCompleted * bonusScore);
//			System.out.println("Your final score is " + finalScore);
//		}	
//	}
	
	public static void calculateScore(boolean isGameOver, int score, int levelCompleted, int bonusScore) {
//		boolean isGameOver = true;
		
//		int score = 1000;
//		int levelCompleted = 8;
//		int bonusScore = 200;
		
		if (isGameOver) {
			int finalScore = score + (levelCompleted * bonusScore);
			finalScore = score + (levelCompleted * bonusScore);
			System.out.println("Your final score is " + finalScore);
		}	
	}
	
	public static int calculateScore(int score, int levelCompleted, int bonusScore) { 
		return score + (levelCompleted * bonusScore);

	}

}
