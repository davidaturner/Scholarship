package com.agnessilent.decisionactivity;

public class DecisionActivity {
    public static void main(String[] args) {
        System.out.println(isBool(1));
        System.out.println(isBool(0));
        System.out.println(checkEverything(true));
    }

    public static boolean isBool(int number) {
//        Complete the isBool method of the StudentInput class by setting the value of isUno to true
//        or false depending on the value of number1:
//
//        If number1 equals 1, set isUno to true
//        If number1 does not equal 1, set isUno to false
        return (number == 1)?true:false;
    }

    public static boolean checkEverything(boolean bool) {
//        Complete the checkEverything method of the StudentCode class by setting the value of
//                isTrue to true or false depending on the value of bool1:
//
//        If bool1 equals true, set isTrue to true
//        If bool1 equals false, set isTrue to false
        return bool;
    }
}
