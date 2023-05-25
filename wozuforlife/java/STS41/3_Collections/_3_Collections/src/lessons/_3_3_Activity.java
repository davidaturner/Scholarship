package lessons;

public class _3_3_Activity {

	public static void main(String[] args) {
		activity1();
		activity2();

	}
	
	public static void activity1() {
		
//		In the newArray method of the StudentInput class, use the musician variable to create an array 
//		containing the names (string values) below. The names should be added in the same order from top 
//		to bottom.
		printArray(newArray());
	}
	
	public static void activity2() {
		
//		In the newArray method of the StudentInput class, use the grade variable to create an array 
//		containing the grades (string values) below. The grades should be added in the same order from 
//		top to bottom.
		printArray(newArray1());
	}
	
	public static String[] newArray() {
		
		String[] musician = {"John", "Mike", "Joe", "Kevin"}; 
		return musician;
	}
	
	public static String[] newArray1() {
		
		String[] grades = {"A", "B", "C", "D", "F"}; 
		return grades;
	}
	
	public static void printArray(String[] arr) {
		
		for(int i=0; i<arr.length; i++) {
			
			System.out.print(arr[i]);
			if (i < arr.length-1) {
				System.out.print(", ");
			}
		}
		System.out.println();
	}

}
