package com.agnessilent.l01handson;

public class L01HandsOn {
    public static void main(String[] args) {
        Step1(true);
        Step1(false);

        Step2(false, false);
        Step2(true, false);
        Step2(false, true);
        Step2(true, true);

        Step3(false, false);
        Step3(true, false);
        Step3(false, true);
        Step3(true, true);
    }

    public static void Step1(boolean isSunny) {
    // if it's sunny
        if (isSunny) {
            // print "Wear sunglasses!"
            System.out.println("Wear sunglasses!");
        }
    // else
        else {
            // print "Don't wear sunglasses."
            System.out.println("Don't wear sunglasses.");
        }
    }

    public static void Step2(boolean isSunny, boolean atBeach) {
        System.out.println("------------------------------------");
    // if it's sunny
        if (isSunny) {
            // print "Wear sunglasses!"
            System.out.println("Wear sunglasses!");
            // if at the beach
            if (atBeach) {
                // print "Wear sunblock!"
                System.out.println("Wear sunblock!");
            }
            // else
            else {
                // print "Don't need sunblock."
                System.out.println("Don't need sunblock.");
            }
        }
    // else
        else {
            // print "Don't need to wear sunglasses."
            System.out.println("Don't need to wear sunglasses.");
        }
    }

    public static void Step3(boolean isSunny, boolean atBeach) {
        System.out.println("------------------------------------");
    // if it's sunny
        if (isSunny) {
            // print "Wear sunglasses!"
            System.out.println("Wear sunglasses!");
            // if at the beach
            if (atBeach) {
                // print "Wear sunblock!"
                System.out.println("Wear sunblock!");
            }
            // else
            else {
                // print "Don't need sunblock."
                System.out.println("Don't need sunblock.");
            }
        }
    // else
        else {
            // print "Don't need to wear sunglasses."
            System.out.println("Don't need to wear sunglasses.");
            // if at the beach
            if (atBeach) {
                // print "Come back tomorrow."
                System.out.println("Come back tomorrow.");
            }
            // else
            else {
                // print "Don't go to the beach."
                System.out.println("Don't go to the beach.");
            }
        }
    }
}
