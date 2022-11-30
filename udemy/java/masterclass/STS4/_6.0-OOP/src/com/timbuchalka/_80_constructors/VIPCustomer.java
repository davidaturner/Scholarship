package com.timbuchalka._80_constructors;

public class VIPCustomer {

	static public String DEFAULT_NAME = "Default name";
	static public double DEFAULT_CREDITLIMIT = 100;
	static public String DEFAULT_EMAILADDRESS = "Default email address";
	
	private String name;
	private double creditLimit;
	private String emailAddress;
	
	public VIPCustomer() {
		this(VIPCustomer.DEFAULT_NAME, VIPCustomer.DEFAULT_CREDITLIMIT, VIPCustomer.DEFAULT_EMAILADDRESS);
	}
	public VIPCustomer(String name, String emailAddress) {
		this(name, VIPCustomer.DEFAULT_CREDITLIMIT, emailAddress);
	}
	public VIPCustomer(String name, double creditLimit, String emailAddress) {
		this.name = name;
		this.creditLimit = creditLimit;
		this.emailAddress = emailAddress;
	}
	
	// Getters
	public String getName() {
		return name;
	}

	public double getCreditLimit() {
		return creditLimit;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	
	// toString()
	@Override
	public String toString() {
		return "Name: " + name + " Credit Limit: " + creditLimit + " Email: " + emailAddress;
	}
	
}
