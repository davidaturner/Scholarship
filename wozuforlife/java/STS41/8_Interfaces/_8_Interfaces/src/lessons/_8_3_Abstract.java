package lessons;

public class _8_3_Abstract {

	public static void main(String[] args) {
//		Abstract vs. Interface
//		There are a few things to note when differentiating abstract and interface classes.
//
//		Interfaces can only contain abstract methods, while abstract classes can contain a mix of 
//		abstract and non-abstract methods. Although the methods in the interfaces don't explicitly have 
//		abstract prepended to them, all methods in interfaces are abstract.
//
//		Interfaces can inherit from multiple classes (multiple-inheritance), while abstract cannot.
//
//		Interfaces cannot provide implementation, while an abstract class can.
//
//		Interfaces can only contain final and static variables, while an abstract can contain final, 
//		non-final, static, and non-static variables.
		
		Teacher teacher = new Teacher("Tim Boyd", 35, "English");
		teacher.sayHello();

	}
	
	public abstract static class Person {
	    private String name;
	    private int age;

	    public Person(String name, int age) {
	        this.name = name;
	        this.age = age;
	    }

	    public abstract void sayHello();

	    public String getName() {
	        return this.name;
	    }
	}
	
	public static class Teacher extends Person {
	    private String subject;

	    public Teacher(String name, int age, String subject) {
	        super(name, age);
	        setSubject(subject);
	    }

	    public void setSubject(String subject) {
	        this.subject = subject;
	    }

	    public void sayHello() {
	        System.out.println("Hello, my name is " + this.getName() + ", and I teach " + this.subject);
	    }
	}
	
	

}

