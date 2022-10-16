package com.agnessilent.and;

public class AndExample {

    public static void main(String[] args) {

        imHungry(false, false);
        imHungry(false, true);
        imHungry(true, false);
        imHungry(true, true);
    }

    public static void imHungry (boolean isHungry, boolean isRestaurantOpen) {

        if(isHungry && isRestaurantOpen){
            System.out.println("Go to the restaurant!");
        }
        else{
            System.out.println("Don't go to the restaurant.");
        }
    }
}
