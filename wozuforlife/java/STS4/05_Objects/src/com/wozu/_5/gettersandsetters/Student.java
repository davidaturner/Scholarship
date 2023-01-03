package com.wozu._5.gettersandsetters;

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
