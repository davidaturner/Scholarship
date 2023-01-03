package com.wozu._2.objects;

public class StringExamples {

	public static void main(String[] args) {
		
		imJustAString();
		isEmpty();
		replaceIt();
	
	}
	
	public static void imJustAString() {
		
		String basicString = "Hi, I'm a String.";
		System.out.println(basicString);

		String fancyString = new String("Hi, I'm also a String.");
		System.out.println(fancyString);

		// changing the state of the variable and then printing the result
		String uppercaseString = fancyString.toUpperCase();
		System.out.println(uppercaseString);
	}
	
	public static void isEmpty() {
		
		String string1 = "";
		System.out.println(string1.isEmpty());

		String string2 = "Text!";
		System.out.println(string2.isEmpty());
	}
	
	public static void replaceIt() {
		String quote = "The quick brown fox jumps over the lazy dog";

		// replacing 'o' with '?'
		quote = quote.replace('o','?');
		System.out.println(quote);

		// replacing '?' with 'o'
		quote = quote.replace('?','o');
		System.out.println(quote);
	}

}
