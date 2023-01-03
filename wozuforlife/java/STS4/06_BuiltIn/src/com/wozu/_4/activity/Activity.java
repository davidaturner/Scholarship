package com.wozu._4.activity;

public class Activity {

	public static void main(String[] args) {
		String[] nowords = {};
		String[] words = { "Hello", "Joe", "Smith" };
		try {
			System.out.println(build(nowords));	
		} catch(Exception e) {
			System.out.println("Exception occurred.");
		}

		try {
			System.out.println(build(words));
		} catch(Exception e) {
			System.out.println("Exception occurred.");			
		}

	}
	
	
	public static StringBuilder build(String[] words) throws Exception {
		StringBuilder sb = new StringBuilder();			
		if (words != null && words.length>0) {
			for(int i=words.length-1; i>=0; i--) {
				sb.append(words[i] + " ");							
			}
		} else {
			throw new Exception("EMPTY");
		}			
		return sb;
	}

}
