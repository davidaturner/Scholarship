package com.wozu._5.hashtable;

import java.util.Hashtable;

public class Persist {

	public static void main(String[] args) {
		Hashtable<String, String> englishDictionary = new Hashtable<String, String>();
		englishDictionary.put("persist", "to go on resolutely or stubbornly in spite of opposition, importunity, or warning");

		// get the value associated with the "persist" key
		String definition = englishDictionary.get("persist");
		// if the key exists, print the value
		if (definition != null) {
		    System.out.println("persist = " + definition);
		}

	}

}
