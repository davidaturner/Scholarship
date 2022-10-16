package com.agnessilent.equality;

public class EqualityExamples {

    public static void main(String[] args) {

        isEqual(5, 5);
        isEqual(5, 6);

        isStringEquivalent();
        isStringEquivalentDeux();
    }

    public static void isEqual(int a, int b) {
        // the equality operator ==
        System.out.println(a == b);
    }

    public static void isStringEquivalent() {
        // All 3 vars have the same string value: My dog Fido.
        String var1 = "My dog Fido.";
        String var2 = "My dog Fido.";
        String var3 = new String("My dog Fido.");
        System.out.println("1. " + var1 + " 2. " + var2 + " 3. " + var3);
        // TRUE! because both are assigned to the same literal
        boolean equal12 = (var1 == var2);
        System.out.println("(var1 == var2): " + (var1 == var2));
        // FALSE! `var3` is created using `new`
        boolean equal23 = (var2 == var3);
        System.out.println("(var2 == var3): " + (var2 == var3));
    }

    public static void isStringEquivalentDeux() {

        String var1 = "My dog Fido.";
        String var2 = "My DOG Fido.";   // notice the case
        String var3 = new String("My dog Fido.");
        System.out.println("1. " + var1 + " 2. " + var2 + " 3. " + var3);

        // FALSE! case (capitalization) matters!
        boolean equal12 = var1.equals(var2);
        System.out.println("var1.equals(var2): " + var1.equals(var2));
        // TRUE! both variables contain the same string value
        boolean equal13 = var1.equals(var3);
        System.out.println("var1.equals(var3): " + var1.equals(var3));
    }

}
