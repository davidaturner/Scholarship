package com.timbuchalka._77_classes.ex30;

public class Person {

	private String firstName;
	private String lastName;
	private int age;
	
	public String getFullName() {
		String fullname = "";
		if (!firstName.isEmpty() && !lastName.isEmpty()) {
			fullname += firstName + " " + lastName;
		} else if (firstName.isEmpty()) {
			fullname += lastName;
		} else if (lastName.isEmpty()) {
			fullname += firstName;
		}
		
		return fullname;
	}
	
	public boolean isTeen() {
		return (age > 12 && age < 20);
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) { 
		this.age = (age < 0 || age > 100)? 0 : age;
	}
}
