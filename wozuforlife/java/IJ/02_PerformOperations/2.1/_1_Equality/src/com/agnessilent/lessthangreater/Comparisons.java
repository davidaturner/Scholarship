package com.agnessilent.lessthangreater;

public class Comparisons {

    public static void main(String[] args) {

        lessThan(2, 4);
        lessThan(4, 4);

        lessThanEqual(4, 4);

        greaterThanEqual(17, 18);
        greaterThanEqual(18, 18);
        greaterThanEqual(19, 18);
    }

    public static void lessThan(int a, int b) {
        if(a < b){
            System.out.println("a is less than b");
        } else {
            System.out.println("a is NOT less than b");
        }
    }
    public static void lessThanEqual(int a, int b) {
        if(a <= b){
            System.out.println("a is less than or equal to b");
        } else {
            System.out.println("a is NOT less than or equal to b");
        }
    }
    public static void greaterThanEqual(int userAge, int ofAge) {
        // if the user's age at least 18 (greater than or equal to 18), then they
        // can purchase tickets.
        if(userAge >= ofAge){
            System.out.println("Here are your tickets. Enjoy the movie!");
        }
        // otherwise, (they are not at least 18) they cannot purchase the tickets.
        else{
            System.out.println("Sorry, you are too young to purchase tickets for this movie.");
        }
    }
}
