package lessons;

public class _6_2_StringBuilder {

	public static void main(String[] args) {

		notUsingSB();
		usingStringBuilder();

	}
	
	public static void notUsingSB() {
		
	    String finalString = "";
	    String cities[] = {"Tokyo", "Delhi", "Shanghai", "Mexico City", "São Paulo"};
	    // loop through all of the cities
	    for(String city : cities){
	        // concatenate the city names with a comma in between each city name
	        finalString = finalString + city + ", ";
	    }
	    System.out.println(finalString);
	}
	
	public static void usingStringBuilder() {
		
	    String cities[] = {"Tokyo", "Delhi", "Shanghai", "Mexico City", "São Paulo"};
	    StringBuilder sb = new StringBuilder();
	    // loop through all of the cities
	    for(String city : cities){
	        // concatenate the city names
	        sb.append(city);
	        // concatenate a comma between each city name for increased readability
	        sb.append(", ");
	    }
	    System.out.println(sb);
	}

}
