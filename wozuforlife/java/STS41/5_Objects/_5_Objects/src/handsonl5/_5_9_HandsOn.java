package handsonl5;

public class _5_9_HandsOn {

	public static void main(String[] args) {

		step1();
		System.out.println("===========================");
		step2();
		System.out.println("===========================");
		step3();
	}
	
	public static void step1() {
		
		Person person = new Person();
		person.setFirstName("Andre");
		person.setLastName("Heijberg");
		person.setAge(29);
		
		getPersonFullName(person);
	}
	
	public static void step2() {
		
		Person andre = new Person("Andre");
		Person cauldron = new Person("Cauldron", "Lighter");
		Person morey = new Person("Morey", "Moore", 29);
		
		getPersonFullName(andre);
		getPersonFullName(cauldron);
		getPersonFullName(morey);
	}

	public static void step3() {
		
		Person loren = new Person("Loren", "Cupper", -5);
		getPersonFullName(loren);
	}
	
	public static class Person {
		
		private String firstName;
		private String lastName;
		private int age;
		
		public Person() {
			firstName = "";
			lastName = "";
			age = 0;
		}
		
		public Person(String firstName) {
			this();
			this.firstName = firstName;
		}
		
		public Person(String firstName, String lastName) {
			this(firstName);
			this.lastName = lastName;
		}
		
		public Person(String firstName, String lastName, int age) {
			this(firstName, lastName);
			setAge(age);
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
			this.age = age;
			if (age < 0) {
				System.out.println("Attempted to set age to an invalid value. Setting age to 0 instead.");
				this.age = 0;
			}
		}
	}
	
	public static void getPersonFullName(Person person) {
		
		System.out.print("Hi, my name is " + person.getFirstName());
		if (!person.getLastName().isEmpty()) {
			System.out.print(" " + person.getLastName());
			if (person.getAge() > 0) {
				System.out.print(", " + person.getAge());
			}
		}
		System.out.println(".");
	}


}
