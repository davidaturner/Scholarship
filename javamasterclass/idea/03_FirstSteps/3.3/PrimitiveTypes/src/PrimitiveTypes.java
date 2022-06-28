import org.w3c.dom.ls.LSOutput;

public class PrimitiveTypes {

    // There are eight primitive types in java:

    // int, long, float, double, byte, boolean, char, short.
    // And... eight matching wrapper classes
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        int myValue = 1000;
        System.out.println("Integer Max Value: " + Integer.MAX_VALUE);
        System.out.println("Integer Min Value: " + Integer.MIN_VALUE);
        System.out.println("Overflowed: " + (Integer.MAX_VALUE + 1));
        System.out.println("Underflowed: " + (Integer.MIN_VALUE  - 1));

        // Can represent large int values
        System.out.println(2_147_483_647);
    }
}