/*
Compile and run:
    javac Numbers.java
    java Numbers
*/
class Numbers {
    /*
        int -> byte, short, int, long (can be positive or negative)
        float -> double, float
        character
        boolean

        byte - values: -128 to 127
        int - 4 bytes
        short - 2 bytes
        long - 8 bytes

        float - 4 bytes example: 5.6f;
        double - 8 bytes example: 5.6;

        char - 2 bytes (unicode) example: 'k';
        boolean - true or false (NOT 0, 1);

    */
    public static void main(String arg[]) {
        System.out.println("Hello, World!");

        int num1 = 3;
        byte by = 127;
        short sh = 558;
        long l = 5854l;
        System.out.println(num1);
        System.out.println(by);
        System.out.println(sh);
        System.out.println(l);

        float f = 5.8f;
        double d = 5.8;
        System.out.println(f);
        System.out.println(d);

        char c = 'k';
        boolean b = false;
        System.out.println(c);
        System.out.println(b);
    }
}