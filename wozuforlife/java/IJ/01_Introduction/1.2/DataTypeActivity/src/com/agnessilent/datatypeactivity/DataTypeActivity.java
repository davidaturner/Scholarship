package com.agnessilent.datatypeactivity;

public class DataTypeActivity {

    public static void main(String[] args) {

        System.out.println(myAge());
        System.out.println(myName());
        System.out.println(myDouble());
    }

    public static int myAge() {
        int age = 25;
        return age;
    }

    public static String myName() {
        String name = "Joe Santos";
        return name;
    }

    public static double myDouble() {
        double number = 3.22;
        return number;
    }
}
