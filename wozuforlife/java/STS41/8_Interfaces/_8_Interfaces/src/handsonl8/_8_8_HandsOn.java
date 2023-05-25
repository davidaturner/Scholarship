package handsonl8;

public class _8_8_HandsOn {

	public static void main(String[] args) {
		step1and2();
		step3();

	}
	
	public static void step1and2() {
		
		Dog dog = new Dog();
		Cat cat = new Cat();
		Cow cow = new Cow();
		
		dog.speak();
		cat.speak();
		cow.speak();
		
		dog.run();
		cat.run();
		cow.run();
		
		dog.eat();
		cat.eat();
		cow.eat();
			
	}

	public static void step3() {
		
		Turtle turtle = new Turtle();
		Lizard lizard = new Lizard();
		
		turtle.eat();
		lizard.eat();
		
		turtle.crawl();
		lizard.crawl();
	}
	
	public interface Animal {
		
		void eat();
	}
	
	public interface Mammal extends Animal {
		
		void speak();
		void run();
	}
	
	public interface Reptile extends Animal {
		
		void crawl();
	}
	
	public static class Dog implements Mammal {

		@Override
		public void speak() {
			System.out.println("Bark!");
			
		}

		@Override
		public void run() {
			System.out.println("Dogs can run at a top speed of 45 mph!");
			
		}

		@Override
		public void eat() {
			System.out.println("Dogs eat bones.");
			
		}		
	}

	public static class Cat implements Mammal {

		@Override
		public void speak() {
			System.out.println("Meow!");
			
		}

		@Override
		public void run() {
			System.out.println("Cats can run at a top speed of 30 mph!");
			
		}

		@Override
		public void eat() {
			System.out.println("Cats eat mice.");
			
		}		
	}

	public static class Cow implements Mammal {

		@Override
		public void speak() {
			System.out.println("Moo!");
			
		}

		@Override
		public void run() {
			System.out.println("Cows can run at a top speed of 25 mph!");
			
		}

		@Override
		public void eat() {
			System.out.println("Cows eat grass.");
			
		}		
	}
	
	public static class Turtle implements Reptile {

		@Override
		public void eat() {
			System.out.println("Turtles eat lettuce.");
			
		}

		@Override
		public void crawl() {
			System.out.println("Turtle can crawl at a top speed of 22 mph!");
			
		}
		
	}
	
	public static class Lizard implements Reptile {

		@Override
		public void eat() {
			System.out.println("Lizards eat crickets.");
			
		}

		@Override
		public void crawl() {
			System.out.println("Lizards can crawl at a top speed of 30 mph!");
			
		}
		
		
	}

}

