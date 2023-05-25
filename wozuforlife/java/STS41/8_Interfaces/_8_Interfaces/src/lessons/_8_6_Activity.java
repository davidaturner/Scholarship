package lessons;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class _8_6_Activity {

	public static void main(String[] args) {

		activity1();
		activity2();

	}
	
	public static void activity1() {
		
//		Given the interface Area below, create a public Rectangle class that implements the interface. For 
//		the Rectangle class you will need:
//
//			Two double properties, height and width.
//
//			A constructor that accepts values for its two properties. The first parameter should be 
//			for height.
		Rectangle rect = new Rectangle(2.0, 5.0);
		System.out.println(rect.getArea());
	}
	
	public static void activity2() {
		
//		Given the interface Drawable below, create a public Deck class that implements the interface. For 
//		the Deck class you will need:
//
//			A property that is a List of Strings. This collection will represent the playing cards of the 
//			deck. Use whatever variable name you'd like.
//
//			A constructor with a single parameter for setting the list of cards.
//
//			In the Drawable interface below, the getTopCard method expects the implementation to get the 
//			first item. To get the first item, you first get the collection's iterator by calling the 
//			iterator() method of the collection, and then calling next() on the iterator: e.g., 
//			myList.iterator().next().
		String[] cards = {"9", "10", "J", "Q", "K", "A"};
		Deck deck = new Deck(cards);
		System.out.println("Top card is " + deck.getTopCard());
		
	}
	
	public static interface Area {
		
		double getArea();
	}
	
	public static class Rectangle implements Area {
		
		public double height;
		public double width;
		
		public Rectangle(double height, double width) {
			this.height = height;
			this.width = width;
		}
		
		public double getArea() {
			return height * width;
		}
	}
	
	public static interface Drawable {
		
		String getTopCard();
	}
	
	public static class Deck implements Drawable {
		
		public List<String> cards;
		
		public Deck(String[] cards) {

			List<String>listOfCards = new ArrayList<String>();
			listOfCards.addAll(Arrays.asList(cards));
			this.cards = listOfCards;
		}

		@Override
		public String getTopCard() {
		    // Get the iterator
		    Iterator<String> it = cards.iterator();
		    // return next up in iterator.
		    return it.next();
		}
		
	}

}

