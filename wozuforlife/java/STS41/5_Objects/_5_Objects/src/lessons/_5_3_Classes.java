package lessons;

public class _5_3_Classes {

	public static class Student {
	    public String firstName;
	    public String lastName;
	    public String courseFocus;
	}
	
	public static void main(String[] args) {
		
//		displayNames();
		displayStudentNames();
	}
	
	public static void  displayNames() {
		
		{
		    // student 1
		    String firstName = "James";
		    String lastName = "Gosling";
		    String courseFocus = "Java";
		    System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
		}
		
		{
		    // student 2
		    String firstName = "Anders";
		    String lastName = "Hejlsberg";
		    String courseFocus = "C#";
		    System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
		}
	}
	
	public static void displayStudentNames() {
		
		Student james = new Student();
		james.firstName = "James";
		james.lastName = "Gosling";
		james.courseFocus = "Java";
		displayTheName(james);
		
		Student anders = new Student();
		anders.firstName = "Anders";
		anders.lastName = "Hejlsberg";
		anders.courseFocus = "C#";
		displayTheName(anders);
	}
	
	public static void displayTheName(Student student) {
	    System.out.println(student.firstName + " " + student.lastName + " is studying " + 
				student.courseFocus);
	}

}
