package _544;

public class Blocks {

	public static void main(String[] args) {
		boolean isGameOver = true;
		int score = 5000;
//		int score = 4000;
//		int score = 122;
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
			int finalScore = score + (levelCompleted * bonus);
			System.out.println("Your finalScore was " + finalScore);
		}
		
		score = 10000;
		levelCompleted = 8;
		bonus = 200;
		if (isGameOver) {
			int finalScore = score + (levelCompleted * bonus);
			System.out.println("Your finalScore was " + finalScore);
		}

	}

}
