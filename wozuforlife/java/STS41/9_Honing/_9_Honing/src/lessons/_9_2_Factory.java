package lessons;

public class _9_2_Factory {
//	This commonly used pattern is categorized as a creational pattern. Thus, the purpose of this 
//	pattern is to create new objects. It's no coincidence that this creation tool is called a factory: 
//	it produces objects upon request.
	public static void main(String[] args) {
	    // animal factory
	    AnimalFactory animalFactory = FactoryProvider.getAnimalFactory();

	    // produce a cow and speak
	    Animal cow = animalFactory.getAnimal("Cow");
	    cow.speak();

	    // produce a dog and speak
	    Animal dog = animalFactory.getAnimal("Dog");
	    dog.speak();

	    // produce a cat and speak
	    Animal cat = animalFactory.getAnimal("Cat");
	    cat.speak();
	}
	
	public interface Animal {
	    void speak();
	}
	
	
	public static class FactoryProvider {
		
		public static AnimalFactory getAnimalFactory() {
			return new AnimalFactory();
		}
	}
	
	public static class Cow implements Animal {
	    public void speak() {
	        System.out.println("Moo");
	    }
	}
	
	public static class Dog implements Animal {
	    public void speak() {
	        System.out.println("Bark");
	    }
	}
	
	public static class Cat implements Animal {
	    public void speak() {
	        System.out.println("Meow");
	    }
	}
	
	public static class AnimalFactory {
	    public Animal getAnimal(String animalType) {
	        if(animalType.equalsIgnoreCase("cow")) {
	            return new Cow();
	        }
	        else if(animalType.equalsIgnoreCase("dog")) {
	            return new Dog();
	        }
	        else if(animalType.equalsIgnoreCase("cat")) {
	            return new Cat();
	        }
	        else {
	            // factory cannot create an unrecognized object
	            System.out.println(animalType + " is not recognized by AnimalFactory.");
	            return null;
	        }
	    }
	}

}
