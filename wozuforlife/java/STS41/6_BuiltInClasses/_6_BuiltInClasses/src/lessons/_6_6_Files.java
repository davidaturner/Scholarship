package lessons;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;

public class _6_6_Files {

	public static void main(String[] args) {
		
		fileReaderWriter1();
		System.out.println("==============");
		fileReaderWriter2();

	}
	
	public static void fileReaderWriter1() {
		
		// define the variables and objects
		FileReader reader;
		FileWriter writer;
		String fileContentsRead = "";

		// attempt to run code that may cause an error
		try{
		    // open the file for writing
		    writer = new FileWriter("story.txt");
		    // write the letter "a" inside of the file
		    writer.write("a");
		    // close the file (finished writing)
		    writer.close();

		    // open the file for reading
		    reader = new FileReader("story.txt");
		    // save each character as an integer (ASCII)
		    int c;
		    // while there are more characters to be read, store them
		    while ((c = reader.read()) != -1) {
		        fileContentsRead = fileContentsRead + c;
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
		    System.out.println(fileContentsRead);
		}
	}
	
	public static void fileReaderWriter2() {
		// define the variables and objects
		BufferedReader reader;
		FileWriter writer;
		String fileContentsRead = "";

		// attempt to run code that may cause an error
		try{
		    // open the file for writing
		    writer = new FileWriter("story.txt");
		    // write the letter "a" inside of the file
		    writer.write("a");
		    // close the file (finished writing)
		    writer.close();

		    // open the file for reading
		    reader = new BufferedReader(new FileReader("story.txt"));
		    String line;
		    while ((line = reader.readLine()) != null) {
		        fileContentsRead = fileContentsRead + line;
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
		    System.out.println(fileContentsRead);
		}
	}

}
