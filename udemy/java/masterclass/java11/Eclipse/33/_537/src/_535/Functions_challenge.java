package _542;

public class Functions_challenge {

	public static void main(String[] args) {

		displayHighScorePosition("Dwayne", calculateHighScorePosition(1500));
		displayHighScorePosition("Timothy", calculateHighScorePosition(900));
		displayHighScorePosition("Bolen", calculateHighScorePosition(500));
		displayHighScorePosition("Eger", calculateHighScorePosition(50));
	}
	
	public static void displayHighScorePosition(String playersName, int position) {
		System.out.println(playersName + " managed to get into position " + position);
	}
	
	public static int calculateHighScorePosition(int score) { 
		int position = 0;
		if (score > 1000) {
			position = 1;
		} else if (score > 500) {
			position = 2;
		} else if (score > 100) {
			position = 3;
		} else position = 4;
		return position;

	}

}
