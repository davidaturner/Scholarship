package com.timbuchalka._79_constructors;

public class BankAccount {

	private String accountNumber;
	private double balance;
	private String customerName;
	private String email;
	private String phoneNumber;
	
	// Constructor
	public BankAccount() {
		System.out.println("Constructor called.");
	}
	
	// Class methods
	public void deposit(double amount) {
		System.out.println("\nDepositing " + amount +  " dollars.");
		balance += amount;
		System.out.println("New balance: " + this.toString());
	}
	
	public void withdraw(double amount) {
		System.out.println("\nAttempting to withdraw " + amount +  " dollars.");
		if (amount <= balance) {
			balance -= amount;			
		}
		else {
			System.out.println("Insufficient funds. Balance not changed.");
		}
		System.out.println("New balance: " + this.toString());
	}

	// toString()
	@Override
	public String toString() {

		return customerName + ": " + accountNumber + " Balance: " + balance;
	}
	
	// Getters and setters.
	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
