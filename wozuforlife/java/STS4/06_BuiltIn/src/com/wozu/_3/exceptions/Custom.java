package com.wozu._3.exceptions;

public class Custom {

	public static void main(String[] args) {
		
		System.out.println("Checking SSN: " + 000000000);
		checkSSN(000000000);
		System.out.println("Checking SSN: "+ 123456789);
		checkSSN(123456789);
	}
	
	public static void checkSSN(int SSN) {

	    try {
	        // if SSN is 000-00-0000
	        if(SSN == 000000000){
	            throw new Exception("User SSN Undeclared!");
	        }
	        else {
	            System.out.println("Everything looks good here");
	        }
	    }
	    catch(Exception e) {
	        System.out.println(e.getMessage());
		}
	}

}
