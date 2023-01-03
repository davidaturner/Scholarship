package com.wozu._4.activity;

public class Main {

	public static void main(String[] args) {
		System.out.println("Hello, World!");
		
		Animal animal = new Animal();
		System.out.println(animal.giveBirth());
		
		Bird bird = new Bird();
		System.out.println(bird.giveBirth());
		
		Mammal mammal = new Mammal();
		System.out.println(mammal.giveBirth());
		
		_Bird_Animal a_animal = new _Bird_Animal("Trevor", "unknown");
		System.out.println(a_animal.getBirthMethod());
		
		_Bird_Animal d_animal = new _Bird_Animal("Trevor", _Bird_Animal.DEFAULT_BIRTHMETHOD);	
		System.out.println(d_animal.getBirthMethod());
		
		_Bird a_bird = new _Bird("Carple", false);
		System.out.println(a_bird.getBirthMethod());
		
		_Bird b_bird = new _Bird();
		System.out.println(b_bird.getBirthMethod());
		

	}

}
