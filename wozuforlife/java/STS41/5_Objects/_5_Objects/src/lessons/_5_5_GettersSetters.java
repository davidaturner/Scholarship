package lessons;

public class _5_5_GettersSetters {

	public static void main(String[] args) {
	    // instantiate three student objects
	    Student student1 = new Student();
	    Student student2 = new Student();
	    Student student3 = new Student();

	    // set the information for student 1
	    student1.setFirstName("Harry");
	    student1.setLastName("Potter");
	    student1.setCourseFocus("Flying");

	    // set the information for student 2
	    student2.setFirstName("Ron");
	    student2.setLastName("Weasley");
	    student2.setCourseFocus("Herbology");

	    // set the information for student 3
	    student3.setFirstName("Hermione");
	    student3.setLastName("Granger");
	    student3.setCourseFocus("Potions");

	    // print information for each student
	    System.out.println(student1.getFirstName() + " " + student1.getLastName() + " is studying " + student1.getCourseFocus());
	    System.out.println(student2.getFirstName() + " " + student2.getLastName() + " is studying " + student2.getCourseFocus());
	    System.out.println(student3.getFirstName() + " " + student3.getLastName() + " is studying " + student3.getCourseFocus());
	}

	public static class Student {
	    String firstName;
	    String lastName;
	    String courseFocus;

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

	    // getter method
	    public String getFirstName(){
	        return firstName;
	    }

	    // setter method
	    public void setFirstName(String newFirstName){
	        firstName = newFirstName;
	    }

	    // getter method
	    public String getLastName(){
	        return lastName;
	    }

	    // setter method
	    public void setLastName(String newLastName){
	        lastName = newLastName;
	    }

	    // getter method
	    public String getCourseFocus(){
	        return courseFocus;
	    }

	    // setter method
	    public void setCourseFocus(String newCourseFocus){
	        courseFocus = newCourseFocus;
	    }
	}
}
