package lessons;

import java.util.ArrayList;
import java.util.List;

public class _8_4_Collections {

	public static void main(String[] args) {
		List<String> statesOfMatter = new ArrayList<String>();
		statesOfMatter.add("Solid");
		statesOfMatter.add("Liquid");
		statesOfMatter.add("Gas");

		// print the values in the ArrayList
		for(int i = 0; i < statesOfMatter.size(); i++){
		    System.out.println(statesOfMatter.get(i));
		}

	}

}