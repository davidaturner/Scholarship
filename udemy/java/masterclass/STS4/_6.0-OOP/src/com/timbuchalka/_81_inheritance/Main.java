package com.timbuchalka._81_inheritance;

public class Main {
	
	public static void main(String[] args) {
		System.out.println("Hello, World!");
		
		Animal animal = new Animal("Animal", 1, 1, 5, 5);
		
		Dog yorkie = new Dog("Yorkie", 8, 20, 2, 4, 1, 5, 20, 10, "long silky");
		yorkie.eat();
		
	}
}

