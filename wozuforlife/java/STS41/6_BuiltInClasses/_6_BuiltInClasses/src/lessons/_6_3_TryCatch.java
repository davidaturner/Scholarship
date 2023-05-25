package lessons;

public class _6_3_TryCatch {

	public static void main(String[] args) {

		divideByZero1();
		System.out.println("===================================");
		divideByZero2();
		System.out.println("===================================");
		ssnCheck(000000000);
		ssnCheck(123456789);

	}
	
	public static void divideByZero1() {
		
	    int result = 0;
	    // try to divide by zero and print the result
	    try{
	        result = 1/0;
	    }
	    // print error message if an error is encountered
	    catch(Exception e){
	        System.out.println("An error occurred when calculating the result.");
	        result = -1;
	    }
	}
	
	public static void divideByZero2() {
		
		int result = 0;

		try{
		    result = 1/0;
		}
		catch(Exception e){
		    System.out.println("An error occurred when calculating the result.");
		    result = -1;
		    e.printStackTrace();
		}
		finally{
		    System.out.println("The new result is: " + result);
		}
	}
	
	public static void ssnCheck(int SSN) {
		
	    // SSN is 123-45-6789

	    try {
	        // if SSN is 000-00-0000
	        if(SSN == 000000000){
	            throw new Exception("user ssn undeclared");
	        }
	        else {
	            System.out.println("Everything looks good here.");
	        }
	    }
	    catch(Exception e) {
	        System.out.println(e.getMessage());
	    	e.printStackTrace();
	    }
	}

}
