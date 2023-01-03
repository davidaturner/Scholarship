package com.wozu._4.activity;

public class _Bird_Animal {
	public static String DEFAULT_NAME = "Name";
	public static String DEFAULT_BIRTHMETHOD = "don't know";
	
	String name;
	String birthMethod;
	
	public _Bird_Animal() {
		this.name = DEFAULT_NAME;
		this.birthMethod = DEFAULT_BIRTHMETHOD;
	}
	
	public _Bird_Animal(String name, String birthMethod) {
		super();
		this.name = name;
		this.birthMethod = birthMethod;
	}

	public String getName() {
		return name;
	}

	public String getBirthMethod() {
		return birthMethod;
	}
	

}
