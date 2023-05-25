package handsonl4;

public class _4_6_HandsOn {

	public static void main(String[] args) {
		
		step1();
		step2();
		step3();

	}
	
	public static void step1() {
		
		System.out.println(doubleMe(2));
	}
	
	public static int doubleMe(int val) {
		return val * 2;
	}
	
	public static void step2() {
		
		System.out.println(quadrupleMe(2));
		
	}
	
	public static int quadrupleMe(int val) {
		
		return doubleMe(doubleMe(val));
	}
	
	public static void step3() {
		
		System.out.println(doubleMeTimes(2, 3));
	}
	
	public static int doubleMeTimes(int val, int count) {
		
		int results = val;
		for(int i=0; i<count; i++) {
			results = doubleMe(results);
		}
		return results;
	}

}
