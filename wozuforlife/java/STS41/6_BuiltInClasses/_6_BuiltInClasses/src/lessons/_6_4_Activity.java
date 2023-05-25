package lessons;

public class _6_4_Activity {

	public static void main(String[] args) {
		
		activity();

	}
	
	public static void activity() {
		
//		In the StudentCode class, create a static method named build. This method should:
//
//			Accept a single string array parameter named words.
//
//			Create a StringBuilder object and add the values from the words array in 
//			the reverse order. You can do this by using a for loop where you initialize 
//			the loop variable to the length of the array, less one, and decrement its 
//			value with each iteration until it reaches the first item at index 0.
//
//			Returns the StringBuilder object.
//
//			Throw an exception that says "EMPTY" if the words array is empty (has a 
//					length of 0).
		String[] words = {
				"Hello",
				"John",
				"Smith"
		};
		
		String[] empty = {};
		
		StringBuilder sbe = build(empty);
		StringBuilder sb = build(words);
		System.out.println(sb.toString());
		
	}
	
	public static StringBuilder build(String[] arr) {

		StringBuilder sb = new StringBuilder();
		try {
			if (arr == null || arr.length == 0) {
				throw new Exception("EMPTY!");
			}
			for(int i=arr.length-1; i>=0; i--) {
				sb.append(arr[i] + "\n");
			}
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return sb;		
	}

}
