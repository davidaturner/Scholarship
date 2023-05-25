package handsonl9;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class _9_7_Handson {

	public static void main(String[] args) {

//		step1();
//		step2();
		step3();
	}

	public static void step1() {
		
		AnimalFactory factory = FactoryProvider.getAnimalFactory();
		System.out.println(((Cat)factory.create("cat")).getName());
		System.out.println(((Dog)factory.create("dog")).getName());
		System.out.println(((Cow)factory.create("cow")).getName());
	}
	
	public static void step2() {
		
		List<Animal> animalList = new ArrayList<Animal>();
		
		AnimalFactory factory = FactoryProvider.getAnimalFactory();
		String choice = "";
		
		do  {
			
			choice = StudentHelper.ReadInputString();
			if (choice.equalsIgnoreCase("cat")) {
				animalList.add((Cat)factory.create("cat"));
			}
			if (choice.equalsIgnoreCase("dog")) {
				animalList.add((Dog)factory.create("dog"));
			}
			if (choice.equalsIgnoreCase("cow")) {
				animalList.add((Cow)factory.create("cow"));
			}
			
		} while( !choice.equalsIgnoreCase("exit"));
		
		for(Animal animal : animalList) {
			System.out.println(animal.getName());
		}
	}
	
	public static void step3() {
		
		DetailedAnimal animal = new DetailedAnimal.AnimalBuilder("cow", 2.23f, 3.33f, 4.44f)
									.setGrassFed(true).build();
		System.out.println(animal.getName());
		System.out.println(animal.getLength());
		System.out.println(animal.getHeight());
		System.out.println(animal.getWeight());
		System.out.println(animal.isGrassFed());

	}
	
	public static class Animal {
	    // name of the animal
	    private String name;

	    public Animal() {
	        name = "";
	    }

	    public Animal(String name) {
	        this.name = name;
	    }

	    public String getName() {
	        return name;
	    }
	}
	
	public static class DetailedAnimal extends Animal {
		// mandatory
		private float length;
		private float height;
		private float weight;
		// optional
		private boolean grassFed;
		
		private DetailedAnimal(AnimalBuilder builder) {
			super(builder.name);
			this.length = builder.length;
			this.height = builder.height;
			this.weight = builder.weight;
			this.grassFed = builder.grassFed;
		}
		
		public float getLength() {
			return length;
		}

		public float getHeight() {
			return height;
		}

		public float getWeight() {
			return weight;
		}

		public boolean isGrassFed() {
			return grassFed;
		}
		
		public static class AnimalBuilder {
			// mandatory
			private String name;
			private float length;
			private float height;
			private float weight;
			// optional
			private boolean grassFed;
			public AnimalBuilder(String name, float length, float height, float weight) {
				
				this.name = name;
				this.length = length;
				this.height = height;
				this.weight = weight;
			}
			public AnimalBuilder setGrassFed(boolean grassFed) {
				this.grassFed = grassFed;
				return this;
			}
			
			public DetailedAnimal build() {
				return new DetailedAnimal(this);
			}
		}
		
	}
	public static class Cat extends Animal {
		
		public Cat() {
			super("cat");		
		}
	}
	
	public static class Dog extends Animal {
		
		public Dog() {
			super("dog");
		}
	}
	
	public static class Cow extends Animal {
		
		public Cow( ) {
			super("cow");
		}
	}
	
	
	public static class AnimalFactory implements AnimalFactoryInterface {
		
		public Animal create(String animalType) {
			
			if ("Cat".equalsIgnoreCase(animalType)) {
				return new Cat();
			} else if ("Dog".equalsIgnoreCase(animalType)) {
				return new Dog();
			} else if ("Cow".equalsIgnoreCase(animalType)) {
				return new Cow();
			}
			
			return null;
		}
	}
	
	interface AnimalFactoryInterface {
		Animal create(String animalType);
		
	}
	
	public static class FactoryProvider {
		
		public static AnimalFactory getAnimalFactory() {
			return new AnimalFactory();
		}
		
	}
	
	public static class StudentHelper {
	    @SuppressWarnings("resource")
	    public static String ReadInputString(){
	        // declare a new Scanner object
	        Scanner scan = new Scanner(System.in);

	        // read in user input and store it in the scanned variable
	        String scanned = scan.nextLine();

	        // return the String result to wherever the "StudentHelper.ReadInputString()" is called
	        return scanned;
	    }

	    @SuppressWarnings("resource")
	    public static int ReadInputInt(){
	        // declare a new Scanner object
	        Scanner scan = new Scanner(System.in);

	        // read in user input and store it in the scanned variable
	        int scanned = scan.nextInt();

	        // return the int result to wherever the "StudentHelper.ReadInputInt()" is called
	        return scanned;
	    }
	}
}
