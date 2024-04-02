package _546;

public class Funcs {

	public static void main(String[] args) {
		
		boolean isGameOver = true;
		int score = 5000;
//		int score = 4000;
//		int score = 122;
		int levelCompleted = 5;
		int bonus = 100;
		
//		if (score >= 1000 && score < 5000) {
//			System.out.println("Your score was greater than or equal to 1000 and less than 5000.");
//		} else if (score < 1000) {
//			System.out.println("Your score was less than 1000.");
//		} else {
//			System.out.println("Got here.");
//		}
//		
//		if (isGameOver) {
//			int finalScore = score + (levelCompleted * bonus);
//			System.out.println("Your finalScore was " + finalScore);
//		}
		
		calculateScore();
		
		score = 10000;
		levelCompleted = 8;
		bonus = 200;
//		if (isGameOver) {
//			int finalScore = score + (levelCompleted * bonus);
//			System.out.println("Your finalScore was " + finalScore);
//		}
		
//		calculateScore(isGameOver, score, levelCompleted, bonus);
		
		score = 10000;
//		isGameOver = false;
		if (isGameOver) {
			int finalScore = calculateScore(score, levelCompleted, bonus);
			if  (finalScore > 0) {
				System.out.println("Your finalScore was " + finalScore);				
			} else {
				System.out.println("FinalScore was negative.");
			}
		} else {
			System.out.println("Game NOT Over.");
		}

	}
	
	public static void calculateScore() {
		boolean isGameOver = true;
		int score = 5000;
		int levelCompleted = 5;
		int bonus = 100;
		
		if (score >= 1000 && score < 5000) {
			System.out.println("Your score was greater than or equal to 1000 and less than 5000.");
		} else if (score < 1000) {
			System.out.println("Your score was less than 1000.");
		} else {
			System.out.println("Got here.");
		}
		
		if (isGameOver) {
			int finalScore = calculateScore(score, levelCompleted, bonus);
			System.out.println("Your finalScore was " + finalScore);
		}
	}
	
//	public static void calculateScore(boolean isGameOver, int score, int levelCompleted, int bonus) {
//		if (isGameOver) {
//			int finalScore = score + (levelCompleted * bonus);
//			System.out.println("Your finalScore was " + finalScore);
//		}
//	}
	
	public static int calculateScore(int score, int levelCompleted, int bonus) {
		int finalScore = score + (levelCompleted * bonus);
		return (finalScore > 0)?finalScore: -1;
	}

}
