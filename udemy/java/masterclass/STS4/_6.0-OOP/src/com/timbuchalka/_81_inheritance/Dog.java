package com.timbuchalka._81_inheritance;

public class Dog extends Animal {

	private int eyes;
	private int legs;
	private int tail;
	private int teeth;
	private String coat;
	
	public Dog(String name, int brain, int body, int size, int weight, 
			int eyes, int legs, int tail, int teeth, String coat) {
		super(name, brain, body, size, weight);
		this.eyes = eyes;
		this.legs = legs;
		this.tail = tail;
		this.teeth = teeth;
		this.coat = coat;
	}
	
	@Override
	public void eat() {
		System.out.println("Dog.eat() called.");
		chew();
	}
	
	private void chew() {
		System.out.println("Dog.chew() is called.");
	}
	
	
}
