package lessons;

public class _1_12 {

	public static void main(String[] args) {
		_1_12.isBool(1);
		_1_12.isBool(0);
		_1_12.checkEverything(true);
		_1_12.checkEverything(false);

	}
	
	//	Complete the isBool method of the StudentInput class by setting the value of isUno 
	//	to true or false depending on the value of number1:
	//
	//		If number1 equals 1, set isUno to true
	//		If number1 does not equal 1, set isUno to false

	public static boolean isBool(int number1) {
		boolean isUno = (number1 == 1);
		System.out.println(isUno);
		return isUno;
	}
	
	//	Complete the checkEverything method of the StudentCode class by setting the value of 
	//	isTrue to true or false depending on the value of bool1:
	//
	//		If bool1 equals true, set isTrue to true
	//		If bool1 equals false, set isTrue to false
	public static boolean checkEverything(boolean bool1) {
		boolean isTrue = bool1;
		System.out.println(isTrue);
		return isTrue;
	}

}
