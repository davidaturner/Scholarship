package com.wozu._2.operators;

public class IfElseExample {

	public static void main(String[] args) {

			ratings(5);

	}

	public static void ratings(int rating) {

		// if the user rated the restaurant 5-stars, print "This food is the best! I could eat this every day."
		if(rating == 5){
		    System.out.println("This food is the best! I could eat this every day.");
		}
		// if the user rated the restaurant 4-stars, print "Good meal."
		else if(rating == 4){
		    System.out.println("Good meal.");
		}
		// if the user rated the restaurant 3-stars, print "It was OK."
		else if(rating == 3){
		    System.out.println("It was OK.");
		}
		// if the user rated the restaurant 2-stars, print "I did not like this, but it's cheap."
		else if(rating == 2){
		    System.out.println("I did not like this, but it's cheap.");
		}
		// if the user rated the restaurant 1-star,  print "I'd rather eat dirt."
		else if(rating == 1){
		    System.out.println("I'd rather eat dirt.");
		}
	}
}
