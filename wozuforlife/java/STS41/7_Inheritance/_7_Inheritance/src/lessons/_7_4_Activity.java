package lessons;

public class _7_4_Activity {
			
	public static void main(String[] args) {
//		activity1();
		activity2();

	}

	public static void activity1() {
//		Create two public classes: Mammal and Bird. Each should inherit from the Animal class shown below.
//		For each new class, override the giveBirth method to produce the following output:
//		For the Mammal class, the method should return: "I give live birth"
//		For the Bird class, the method should return "I lay eggs"	
		Animal animal = new Animal();
		System.out.println(animal.giveBirth());
		
		Mammal mammal = new Mammal();
		System.out.println(mammal.giveBirth());
		
		Bird bird = new Bird();
		System.out.println(bird.giveBirth());
	}
	
	public static void activity2() {
//		Given the Bird class below, construct the base class Animal from which it inherits.
//		For the Animal class, you will need:
//		A default constructor.
//		A constructor that accepts values for its two String properties: name and birthMethod.
//		A public method named giveBirth (no parameters) that returns the value of the birthMethod 
//		property (a String).
		AAnimal aanimal = new AAnimal("toby", "i don't know");
		System.out.println(aanimal.giveBirth());
		
		AAnimal aabird = new ABird("largo", true);
		System.out.println(aanimal.giveBirth());
	}

	
	public static class Animal {
	    public String giveBirth() {
	        return "I don't know how";
	    }
	}
	
	public static class Mammal extends Animal {
		@Override
	    public String giveBirth() {
	        return "I give live birth";
	    }		
	}
	
	public static class Bird extends Animal {
		@Override
	    public String giveBirth() {
	        return "I lay eggs";
	    }		
	}

	
	public static class AAnimal {
		String name;
		String birthMethod;
		
		public AAnimal() {			
		}
		
		public AAnimal(String name, String birthMethod) {
			this.name = name;
			this.birthMethod = birthMethod;
		}
		
		public String giveBirth() {
			return birthMethod;
		}
	}
	
	public static class ABird extends AAnimal {
	    boolean flies;

	    public ABird() {
	        super();
	        flies = true;
	    }

	    public ABird(String name, boolean flies) {
	        super(name, "eggs");
	        this.flies = flies;
	    }
	}
	

}
