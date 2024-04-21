package _544;

public class Main {

	public static int calculateScore(String playerName, int score) {
		System.out.printf("Calculating score for player \"%s\" score: %d.\n", playerName, score);
		return score * 1000;
	}

	// overload
	public static int calculateScore(int score) {
		System.out.printf("Calculating score for player \"Unknown\" score: %d.\n", score);
		return score * 1000;
	}
	
	public static void main(String[] args) {

		int score1 = calculateScore("Tim", 500);
		int score2 = calculateScore(500);
		System.out.println("Score1 = " + score1 + " Score2 = " + score2);

	}

}
