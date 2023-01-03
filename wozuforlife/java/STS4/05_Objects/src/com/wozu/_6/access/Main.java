package com.wozu._6.access;

public class Main {

	public static void main(String[] args) {
	    // instantiate three student objects
	    Student student1 = new Student("Harry", "Potter", "Flying");
	    Student student2 = new Student("Ron", "Weasley", "Herbology");
	    Student student3 = new Student("Hermione", "Granger", "Potions");

	    // print the student names and initials
	    System.out.println(student1.getFirstName() + " " + student1.getLastName() + ": " + student1.getInitials());
	    System.out.println(student2.getFirstName() + " " + student2.getLastName() + ": " + student2.getInitials());
	    System.out.println(student3.getFirstName() + " " + student3.getLastName() + ": " + student3.getInitials());
	}

}
