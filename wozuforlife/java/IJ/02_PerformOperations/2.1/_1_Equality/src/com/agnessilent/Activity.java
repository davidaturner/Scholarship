package com.agnessilent;

public class Activity {
    public static void main(String[] args) {
        System.out.println(allTrue(true, true, true));
        System.out.println(allTrue(true, true, false));

        System.out.println(ofAge(12, true));
        System.out.println(ofAge(13, false));
        System.out.println(ofAge(17, true));
        System.out.println(ofAge(18, false));
    }

    public static boolean allTrue(boolean bool1, boolean bool2, boolean bool3) {
        return bool1 && bool2 && bool3;
    }

    public static boolean ofAge(int age, boolean withParent) {
        return age >= 18 || (age >= 13 && withParent);
    }
}
