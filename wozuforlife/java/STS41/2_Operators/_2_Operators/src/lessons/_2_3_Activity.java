package lessons;

public class _2_3_Activity {

	public static void main(String[] args) {

		_1_activity();
		_2_activity();

	}
	
	public static void _1_activity() {
		boolean bool1 = true;
		boolean bool2 = true;
		boolean bool3 = true;
		System.out.println(checkEverything(bool1, bool2, bool3));
		
		bool3 = false;
		System.out.println(checkEverything(bool1, bool2, bool3));
	}
	
	public static boolean checkEverything(boolean bool1, boolean bool2, boolean bool3) {
//		Complete the checkEverything method of the StudentCode class by setting the value 
//		of isAllTrue to true or false depending on the values of bool1, bool2, and bool3:
//			If bool1, bool2, and bool3 all equal true, set isAllTrue to true
//			Otherwise, set isAllTrue to false		
		boolean isAllTrue = bool1 && bool2 && bool3;
		return isAllTrue;
	}
	
	public static void _2_activity() {
		int age = 14;
		boolean withParent = true;
		System.out.println(studentCanWatch(age, withParent));
		
		age = 13;
		withParent = false;
		System.out.println(studentCanWatch(age, withParent));
		
		age = 21;
		withParent = false;
		System.out.println(studentCanWatch(age, withParent));
	}
	
	public static boolean studentCanWatch(int age, boolean withParent) {
//		In the studentCanWatch method of the StudentCode class, set the value of canWatch to 
//		true or false depending on the values of age and withParent.
//			canWatch should be set to true if:
//				age is greater than or equal to 18 -or-
//				age is greater than or equal to 13 -and- withParent is true
//				Otherwise, canWatch should be false.		
//				return false;
		boolean canWatch = (age >= 18) || (age >= 13 && withParent);
		return canWatch;
	}

}
