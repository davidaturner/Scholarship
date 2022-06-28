public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        int myFirstNumber = 5;
        System.out.println(myFirstNumber);

        myFirstNumber = 5 + 10 + (2 * 10);
        int mySecondNumber = 12;
//        int myThirdNumber = 6;
        int myThirdNumber = myFirstNumber * 2;
        System.out.println("My new myFirstNumber is: " + myFirstNumber);

        int myTotal = myFirstNumber + mySecondNumber + myThirdNumber;
        System.out.println("My total: " + myTotal);

        // Challenge
        int myLastOne = 1000 - myTotal;
        System.out.println("My Last One: " + myLastOne);
    }
}
