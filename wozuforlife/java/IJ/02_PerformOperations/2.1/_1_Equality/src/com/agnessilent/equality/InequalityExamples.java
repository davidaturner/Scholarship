package com.agnessilent.equality;

public class InequalityExamples {

    public static void main(String[] args) {
        isStringInequivalent();
    }

    public static void isStringInequivalent() {
        String var1 = new String("My dog Fido.");
        String var2 = new String("My dog Spot.");   // different dog name
        System.out.println("1. " + var1 + " 2. " + var2);

        // Test for equality
        // FALSE! "var1" and "var2" are not equal
        boolean equal12 = var1.equals(var2);
        System.out.println(" var1.equals(var2): " + (var1.equals(var2)));

        // Test for Inequality (note the not operator)
        // TRUE! "var1" does NOT (!) equal "var2"
        boolean notEqual12 = !var1.equals(var2);
        System.out.println(" var1.equals(var2): " + (!var1.equals(var2)));
    }
}
