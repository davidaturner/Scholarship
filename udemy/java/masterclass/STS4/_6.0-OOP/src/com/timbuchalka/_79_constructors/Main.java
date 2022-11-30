package com.timbuchalka._79_constructors;

public class Main {

	public static void main(String[] args) {

		System.out.println("Hello, World!");
		
		BankAccount myaccount = new BankAccount();
		
		myaccount.setAccountNumber("244-3334");
		myaccount.setBalance(200);
		myaccount.setCustomerName("Mystic Bogayh");
		myaccount.setEmail("mbogayh@earthlink.net");
		myaccount.setPhoneNumber("412-223-5567");
		
		System.out.println(myaccount.toString());
		
		myaccount.deposit(300);
		
		myaccount.withdraw(400);

		myaccount.withdraw(400);
		
		myaccount.withdraw(101);
		
		myaccount.withdraw(100);
	}

}
