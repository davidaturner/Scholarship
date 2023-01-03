package com.wozu._7.activity;

public class Activity {

	public static class SimplePerson {
		
		public String firstName;
		public String lastName;
		
		public SimplePerson(String firstName, String lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}
		
		public String fullName() {
			String fullname = this.firstName + " " + this.lastName;
			System.out.println(fullname);
			return fullname;
		}
	}
	
	public static void main(String[] args) {

		SimplePerson[] aSimplePeople = new SimplePerson[] {
			new SimplePerson("James", "Het"),
			new SimplePerson("Pearl", "Yeti"),
			new SimplePerson("Bob", "Rocks")
		};
		
		String[] greetingsFromSimplePeople = greetSimplePerson(aSimplePeople);
		for(String greeting : greetingsFromSimplePeople) {
			System.out.println(greeting);
		}
		
		Person[] people = new Person[] {
				new Person("James", "Het"),
				new Person("Pearl", "Yeti"),
				new Person("Bob", "Rocks")
			};
		
		String[] greetings = greet(people);
		for(String greeting : greetings) {
			System.out.println(greeting);
		}
	}

	public static String[] greetSimplePerson(SimplePerson[] people) {		
		String [] greetings = null;
		
		if (people != null && people.length> 0) {

			for(int i=0; i<people.length; i++) {
				if (greetings == null) {
					greetings = new String[people.length];
				}
				greetings[i] = "Hello " + people[i].firstName + 
				                  " " + people[i].lastName + "!";
			}
		}
		return greetings;	
	}
	
	public static String[] greet(Person[] people) {		
		String [] greetings = null;
		
		if (people != null && people.length> 0) {

			for(int i=0; i<people.length; i++) {
				if (greetings == null) {
					greetings = new String[people.length];
				}
				greetings[i] = "Hello " + people[i].getFirstName() + 
				                  " " + people[i].getLastName() + "!";
			}
		}
		return greetings;	
	}
}
