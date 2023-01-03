package com.wozu._4.constructor;

public class Student {

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
	
    public void statement( ) {
	    System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
    }
    
	public static void main(String[] args) {

	    Student student1 = new Student();
	    System.out.println(student1);
	    student1.statement();
	    
	    Student student2 = new Student("James", "Gosling", "Java");
	    System.out.println(student2.toString());
	    student2.statement();

	}

}
