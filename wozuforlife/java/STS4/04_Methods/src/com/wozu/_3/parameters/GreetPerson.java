package com.wozu._3.parameters;

public class GreetPerson {

	public static void main(String[] args) {
	    greetPerson("George");
	    greetPerson("Thomas");
	    greetPerson("Theodore");
	    greetPerson("Abraham");
	}

	// a method which takes one input of type String
	public static void greetPerson(String name){
	    System.out.println("Hello " + name);
	}

}
