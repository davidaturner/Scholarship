package lessons;

public class _9_4_Visitor {

//	The Visitor pattern is a type of behavioral pattern in which the visitor class will change the 
//	execution of code within the element class. The visitor class will pass in its own object into 
//	the element classes that implement the visitor class which will change the execution of code. 
//	The example for demonstrating the visitor pattern will model a weather alert system. 
	public static void main(String[] args) {
	    // smartphone alert
	    Alert smartphoneAlert = new Smartphone();
	    smartphoneAlert.alert(new AlertDisplayVisitor());

	    // TV alert
	    Alert tvAlert = new TV();
	    tvAlert.alert(new AlertDisplayVisitor());

	    // radio alert
	    Alert radioAlert = new Radio();
	    radioAlert.alert(new AlertDisplayVisitor());

	}
	
	public interface Alert {
	    public void alert(AlertVisitor alertVisitor);
	}
	
	public static class Smartphone implements Alert {
		private String message = "SMS: Weather conditions are rough in your area. Drive carefully.";
	    public void alert(AlertVisitor alertVisitor) {
	        alertVisitor.visit(this);
	    }
	    public String getMessage() {
	    	return message;
	    }
	}
	
	public static class TV implements Alert {
	    public void alert(AlertVisitor alertVisitor) {
	        alertVisitor.visit(this);
	    }
	}
	
	public static class Radio implements Alert {
	    public void alert(AlertVisitor alertVisitor) {
	        alertVisitor.visit(this);
	    }
	}
	
	public interface AlertVisitor {
	    public void visit(Smartphone smartphone);
	    public void visit(TV tv);
	    public void visit(Radio radio);
	}
	
	public static class AlertDisplayVisitor implements AlertVisitor {
	       public void visit(Smartphone smartphone) {
//	          System.out.println("SMS: Weather conditions are rough in your area. Drive carefully.");
	          System.out.println(smartphone.getMessage());
	       }

	       public void visit(TV tv) {
	          System.out.println("Channel 3 says: Stay indoors. Weather conditions are rough in the area.");
	       }

	       public void visit(Radio radio) {
	          System.out.println("WCME Radio says: stay indoors.");
	       }
	}

}
