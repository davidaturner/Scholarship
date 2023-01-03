package com.wozu._6.access;

public class StringFun {
	
    public static void main(String[] args) {
        String result = StringFun.shout("Good morning, James");
        System.out.println(result);
    }
    
    public static String shout(String input){
        String temp = input.toUpperCase();
        return temp;
    }

}
