package lessons;

public class _1_10 {

	public static void main(String[] args) {

//		_1_10.myAge();
//		_1_10.myName();
		_1_10.myNumber();

	}
	
	//	In the myAge method of the StudentInput class that is provided, declare a 
	//	variable named age and set its value to the integer value of 25. The declaration 
	//	should be before the return age statement.
	public static int myAge() {
		int age = 25;
		System.out.println(age);
		return age;
		
	}
	
	//	In the myName method of the StudentInput class that is provided, declare a variable 
	//	named name and set its value to your name as a string. The declaration should be 
	//	before the return name statement.
	public static String myName() {
		String studentName = "David A. Turner";
		System.out.println(studentName);
		return studentName;
	}
	
//	In the myNumber method of the StudentInput class that is provided, declare a variable 
//	named number and set its value to any double-precision, floating point value (a double) 
//	that you'd like. The declaration should be before the return number statement.
	public static double myNumber() {
		double pi = 3.14;
		System.out.println(pi);
		return pi;
	}

}
