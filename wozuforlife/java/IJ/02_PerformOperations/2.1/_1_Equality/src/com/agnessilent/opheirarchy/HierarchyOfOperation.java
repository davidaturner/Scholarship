package com.agnessilent.opheirarchy;

public class HierarchyOfOperation {

    public static void main(String[] args) {
        precidentOne(true, true, false);
        precidentTwo(true, true, false);

        precident(true, true, false);
    }

    public static void precidentOne(boolean isSleepy, boolean isLibraryClosed, boolean isBatteryDead) {

        // && op > || op.
        if(isSleepy || isLibraryClosed && isBatteryDead){
            System.out.println("You should leave now.");
        }
        else{
            System.out.println("Keep on studying!");
        }
    }

    public static void precidentTwo(boolean isSleepy, boolean isLibraryClosed, boolean isBatteryDead) {

        // () op > && op
        if((isSleepy || isLibraryClosed) && isBatteryDead){
            System.out.println("You should leave now.");
        }
        else{
            System.out.println("Keep on studying!");
        }
    }

    public static void precident(boolean a, boolean b, boolean c) {

        // this is true
        System.out.println(a || b || c);

        // this is false
        System.out.println((a || b) && c);

        /*
            Here's the breakdown:

            a || b && c
            a || (b && c)
            a || (false && true)
            a || false
            false || false
            false
        */
    }
}
