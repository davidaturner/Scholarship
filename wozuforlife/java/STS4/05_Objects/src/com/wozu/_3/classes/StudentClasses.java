package com.wozu._3.classes;

public class StudentClasses {
	
	public static class Student {
	    public String firstName;
	    public String lastName;
	    public String courseFocus;
	    
	    public void statement( ) {
		    System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
	    }
	}
		
	public static void main(String[] args) {

		objects();
		classes();
	}
	
	public static void objects() {
	    
		// Use of parenthesis is not to describe an object (like in Javascript).
		// Use of parenthesis in Java is to describe blocks of code.
		student1();
		student2();
	}
	
	public static void student1() {
		{
		    // student 1
		    String firstName = "James";
		    String lastName = "Gosling";
		    String courseFocus = "Java";
		    System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
		}
	}
	public static void student2() {
		{
		    // student 2
		    String firstName = "Anders";
		    String lastName = "Hejlsberg";
		    String courseFocus = "C#";
		    System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
		}
	}
	
	public static void classes() {
		Student student1 = new Student();
		student1.firstName = "James";
		student1.lastName = "Gosling";
		student1.courseFocus = "Java";
		
		student1.statement();
		
		Student student2 = new Student();
		student2.firstName = "Anders";
		student2.lastName = "Hejlsberg";
		student2.courseFocus = "C#";
		
		student2.statement();

	}

}
