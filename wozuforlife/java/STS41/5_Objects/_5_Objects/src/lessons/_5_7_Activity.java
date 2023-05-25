package lessons;

public class _5_7_Activity {

	public static void main(String[] args) {

		activity1();
		System.out.println();
		activity2();

	}
	
	public static void activity1() {
		
//		Given the Person class below, create a public Greeter class with a single static 
//		method named greet. This method should:
//
//			Accept one parameter named people that is an array of Person objects.
//
//			Create a variable called greetings and set it to an array of Strings.
//
//			Use a loop to fill the greetings array with strings that use the 
//			firstName and lastName properties from each of the Person objects in the 
//			people variable. Each greeting string should say "Hello FIRST LAST!", where 
//			"FIRST" and "LAST" are replaced with the values from the person (firstName 
//			and lastName).
//
//			Return the array of greetings.
		Person[] people = {
				new Person("Harry", "Potter"),
				new Person("Ron", "Weasley"),
				new Person("Hermione", "Grander")
		};
		String[] greetings = Greeter.greet(people);
		for(String greeting : greetings) {
			System.out.println(greeting);
		}
	}
	
	public static void activity2() {

//		In the Person class:
//
//			Add getters and setters for the firstName and lastName class variables.
//
//			getFirstName and setFirstName
//			getLastName and setLastName
//			Add a method named fullName that returns the first name concatenated with 
//			the last name with a space in between.			
		Person[] people = getPeople();
		for(Person person : people) {
			System.out.println(person.getFullName());
		}
	}

	public static Person[] getPeople() {
		
		Person[] people = {
				new Person("Harry", "Potter"),
				new Person("Ron", "Weasley"),
				new Person("Hermione", "Grander")
		};
		return people;
	}
	
	public static class Greeter {
		public static String[] greet(Person[] persons) {
			
			String[] greetings = new String[persons.length];
			int i = 0;
			for(Person person : persons) {
				
				String greeting = "Hello " + person.firstName + " " + person.lastName + "!";
				greetings[i] = greeting;
				i++;
			}
			return greetings;
		}
	}

	public static class Person {
		String firstName;
	    String lastName;

	    public Person() {
	        firstName = "";
	        lastName = "";
	    }
	    public Person(String firstName, String lastName) {
	        this.firstName = firstName;
	        this.lastName = lastName;
	    }
	    
	    public String getFullName() {
	    	return getFirstName() + " " + getLastName();
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
	}
	
//	public static class Person {
//	    String firstName;
//	    String lastName;
//
//	    public Person() {
//	        firstName = "";
//	        lastName = "";
//	    }
//	    public Person(String firstName, String lastName) {
//	        this.firstName = firstName;
//	        this.lastName = lastName;
//	    }
//	}
}
