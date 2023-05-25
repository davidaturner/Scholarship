package _interfaces;

public interface Taskable {

	public static String SIMPLE = "Simple";
	public static String COMPLETEABLE = "Completeable";
	
	String getTaskable();
	String describe();
}
