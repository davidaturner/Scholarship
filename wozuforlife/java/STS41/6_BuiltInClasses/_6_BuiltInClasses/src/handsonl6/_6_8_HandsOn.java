package handsonl6;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;

public class _6_8_HandsOn {

	public static void main(String[] args) {
		
		step1();
		step2();
		step3();
	}
	
	public static void step1() {
		// array
		String songs[] = {"Rock With You", "Smooth Criminal", "Wanna Be Startin' Something", 
				"Thriller", "Beat It"};
		StringBuilder sb = new StringBuilder();
		for(int i=0; i<songs.length; i++) {
			sb.append(songs[i]);
			if (i < songs.length-1) {
				sb.append(", ");
			}
		}
		System.out.println(sb.toString());
	}
	
	public static StringBuilder getSongs() {
		
		String songs[] = {"Rock With You", "Smooth Criminal", "Wanna Be Startin' Something", 
				"Thriller", "Beat It"};
		StringBuilder sb = new StringBuilder();
		for(int i=0; i<songs.length; i++) {
			sb.append(songs[i]);
			if (i < songs.length-1) {
				sb.append(", ");
			}
		}
		System.out.println(sb.toString());
		return sb;
	}
	
	public static void step2() {
		
		// get songs.
		StringBuilder sb = getSongs();
		
		// define the variables and objects
		FileWriter writer;

		// attempt to run code that may cause an error
		try{
		    // open the file for writing
		    writer = new FileWriter("songs.txt");
		    // write the letter "a" inside of the file
		    writer.write(sb.toString());
		    // close the file (finished writing)
		    writer.close();
		}
		// catch errors that happened in the try block
		catch(Exception e){
			System.out.println("Error when writing songs.txt.");
		    // print the stack trace (error)
		    e.printStackTrace();
		}
		finally{
		    System.out.println(sb.toString());
		}
	}
	
	public static void step3() {
		
		// define the variables and objects
		BufferedReader reader;
	    StringBuilder sb = new StringBuilder();
	    
		// attempt to run code that may cause an error
		try{

		    // open the file for reading
		    reader = new BufferedReader(new FileReader("songs.txt"));
		    String line;
		    while ((line = reader.readLine()) != null) {
		        sb.append(line);
		    }
		    // close the file (finished reading)
		    reader.close();
		}
		// catch errors that happened in the try block
		catch(Exception e){
		    // print the stack trace (error)
		    e.printStackTrace();
		}
		finally{
		    System.out.println(sb.toString());
		}
	}

}
