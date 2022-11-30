package com.timbuchalka._80_constructors;

public class Main {

	public static void main(String[] args) {
		System.out.println("Hello, World!");
		
		VIPCustomer veep1 = new VIPCustomer();
		VIPCustomer veep2 = new VIPCustomer("Joe Santos", "jsantos@earthlink.net");
		VIPCustomer veep3 = new VIPCustomer("Tami Baugh", 200, "tbaugh@earthlink.net");
		
		System.out.println(veep1.toString());
		System.out.println(veep2.toString());
		System.out.println(veep3.toString());
		
		System.out.println(veep1.getName());
		System.out.println(veep1.getCreditLimit());
		System.out.println(veep1.getEmailAddress());
	}

}
