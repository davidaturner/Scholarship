package lessons;

public class _4_3_Parameters {

	public static void main(String[] args) {

		example1();
		example2();
		example3();

	}
	
	public static void example1() {
	    greetPerson("George");
	    greetPerson("Thomas");
	    greetPerson("Theodore");
	    greetPerson("Abraham");
	}

	// a method which takes one input of type String
	public static void greetPerson(String name){
	    System.out.println("Hello " + name);
	}
	
	public static void example2() {
	    System.out.println(isEven(0));
	}

	public static boolean isEven(int number){

	    boolean result;

	    // if the number is even, set variable to true
	    if(number % 2 == 0){
	        result = true;
	    }
	    // otherwise, set variable to false
	    else{
	        result = false;
	    }

	    // return the variable
	    return result;
	}
	
	public static void example3(){
	    int num1 = 1;
	    int num2 = 2;

	    // store the returned value of the "add" method
	    int sum = add(num1, num2);
	    System.out.println(sum);
	}

	// add method returns an integer
	public static int add(int number1, int number2){
	    return(number1 + number2);
	}

}
