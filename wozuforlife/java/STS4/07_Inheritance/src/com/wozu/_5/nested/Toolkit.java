package com.wozu._5.nested;

//outer class
public class Toolkit {
  // nested class (inner class)
  public static class StringAssist {

      public static String whisper(String line) {        
          return (line != null && !line.isEmpty())? line.toLowerCase() : null;
      }

      public static String yell(String line) {
          return (line != null && !line.isEmpty())? line.toUpperCase() : null;
      }
  }
  // another nested class (inner class)
  public static class MathAssist {

      public static boolean isEven(int number) {
    	  return (number % 2 == 0) ? true : false;
      }

      public static boolean isOdd(int number) {
    	  return (number % 2 == 0) ? false : true;
      }
  }
}
