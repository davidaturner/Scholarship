package com.agnessilent.or;

public class OrExample {

    public static void main(String[] args) {
        mySleeplessNights(false, false);
        mySleeplessNights(false, true);
        mySleeplessNights(true, false);
        mySleeplessNights(true, true);
    }


    public static void mySleeplessNights( boolean isSleepy, boolean isLibraryClosed) {

        if(isSleepy || isLibraryClosed) {
            System.out.println("You should leave now.");
        }
        else {
            System.out.println("Keep on studying!");
        }
    }
}
