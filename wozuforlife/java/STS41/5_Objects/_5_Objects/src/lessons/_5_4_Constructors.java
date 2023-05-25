package lessons;

public class _5_4_Constructors {

	public static void main(String[] args) {

//		Student andre = new Student();
		Student andre = new Student("Andre", "Heijberg", "Algebra");
		displayStudent(andre);
	}
	
	public static class Student {
	    String courseFocus;
	    String firstName;
	    String lastName;

	    // constructor
//	    public Student(){
//	        System.out.println("Student object created!");
//	    }
	    // constructor
	    public Student(){
	        firstName = "";
	        lastName = "";
	        courseFocus = "";
	    }
	    
	    // overloaded constructor
	    public Student(String first, String last, String focus){
	        firstName = first;
	        lastName = last;
	        courseFocus = focus;
	    }
	}
	
	public static void displayStudent(Student student) {
		
		System.out.println(student.firstName + " " + student.lastName + " is studying " + 
							student.courseFocus);
	}

}
