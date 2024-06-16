package _540;

public class Challenge {

	public static void main(String[] args) {

//		int i = 12;
//		System.out.println("is " + i + " an even number? " + isEvenNumber(i));
//		i = 13;
//		System.out.println("is " + i + " an even number? " + isEvenNumber(i));
		
		int start = 4, finish = 20;
		int i = start, found = 0;
		while( i <= finish) {
			if (found == 5) {
				break;
			}
			if (isEvenNumber(i)) {
				System.out.println("is " + i + " an even number? " + isEvenNumber(i));
				found++;
			}
			i++;
		}
		
		System.out.println("Total even numbers found = " + found);
	}
	
	public static boolean isEvenNumber(int number) {
		
		return (number % 2 == 0);
	}

}
