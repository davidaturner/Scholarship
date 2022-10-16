package com.agnessilent.helloworld;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        printlnstrings();
        printlnchars();
        printlnnumbers();
        printlnbools();

    }

    public static void printlnstrings() {
        String message = "Hello, World!";
        System.out.println(message);

        message = "he was taking a 'nap' in the back of the class";
        System.out.println(message);

        message = "he was taking a \"nap\" in the back of the class";
        System.out.println(message);
    }

    public static void printlnchars() {
        char letter = 'E';
        System.out.println(letter);

        letter = '\u03A9';
        System.out.println(letter);
    }

    public static void printlnnumbers() {
        int daysOfTheWeek = 7;
        System.out.println(daysOfTheWeek);

        int caloriesConsumed = 2000;
        int populationOfChinaIn2017 = 1371000000;

        int age = 26;
        System.out.println(age);

        int sum = 2 + 2;
        System.out.println(sum);

        double pi = 3.14;
        System.out.println(pi);

        float pif = 3.14f;
        System.out.println(pif);
    }

    public static void printlnbools() {
        boolean isUserLoggedIn = true;
        boolean isRestaurantOpen = false;
        System.out.println(isRestaurantOpen);
        boolean isBatteryLow = true;

        boolean isEclipseOpen = true;
        System.out.println(isEclipseOpen);

        /* final exercise */
        final int HOURS_IN_A_DAY = 24;
        System.out.println(HOURS_IN_A_DAY);
    }
}