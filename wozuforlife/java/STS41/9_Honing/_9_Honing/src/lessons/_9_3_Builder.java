package lessons;

public class _9_3_Builder {
//	A builder pattern is categorized as a structural pattern. It operates by creating complex objects 
//	in a sequence of smaller steps. Less-overloaded constructors are needed as a result. It also solves 
//	the problem of having a complex factory. If a factory were to produce objects that are complex, it 
//	would need to have a multitude of different states of the same object to be returned. Additionally, 
//	builders solve the problem of optional parameters, where method overloading can be reduced.
	public static void main(String[] args) {
	    // simple Employee object using only mandatory parameters
	    Employee johnEmployee = new Employee
	    							.EmployeeBuilder(
	    							"John", "Smith", "Writer", 50000f)
	    							.build();
	    System.out.println(johnEmployee.getFirstName() + " " + johnEmployee.getLastName() + 
	    		" makes " + johnEmployee.getSalary() + " as a " + 
	    		johnEmployee.getJobTitle());

	    // complex Employee object using additional setters from EmployeeBuilder class
	    Employee patEmployee = new Employee
	    						.EmployeeBuilder("Pat", "Green", "Chemist", 70000f)
	    						.setPhoneNumber("555-123-4567")
	    						.setStreetAddress("123 Alphabet St.")
	    						.setCity("Tempe").setState("Arizona")
	    						.setZip(85281)
	    						.build();
	    System.out.println(patEmployee.getFirstName() + " " + 
	    						patEmployee.getLastName() + " makes " + 
	    						patEmployee.getSalary() + " as a " + 
	    						patEmployee.getJobTitle() + " and lives in " + 
	    						patEmployee.getCity() + ", " + patEmployee.getState());

	}
	
	public static class Employee {
	    // mandatory parameters
	    private String firstName;
	    private String lastName;
	    private String jobTitle;
	    private float salary;

	    // optional parameters
	    private String streetAddress;
	    private String city;
	    private String state;
	    private int zipCode;
	    private String phoneNumber;

	    // an EmployeeBuilder object passed into the default constructor.
	    private Employee(EmployeeBuilder builder) {
	        this.firstName = builder.firstName;
	        this.lastName = builder.lastName;
	        this.jobTitle = builder.jobTitle;
	        this.salary = builder.salary;
	        this.streetAddress = builder.streetAddress;
	        this.city = builder.city;
	        this.state = builder.state;
	        this.zipCode = builder.zipCode;
	        this.phoneNumber = builder.phoneNumber;
	    }
	    
//	    public Employee(String firstName, String lastName, String jobTitle, float salary) {
//	        this.firstName = firstName;
//	        this.lastName = lastName;
//	        this.jobTitle = jobTitle;
//	        this.salary = salary;
//	    }
//
//	    public Employee(EmployeeBuilder employeeBuilder) {
//			// TODO Auto-generated constructor stub
//		}

		public String getFirstName() {
	        return firstName;
	    }

	    public String getLastName() {
	        return lastName;
	    }

	    public String getPhoneNumber() {
	        return phoneNumber;
	    }

	    public String getStreetAddress() {
	        return streetAddress;
	    }

	    public String getCity() {
	        return city;
	    }

	    public String getState() {
	        return state;
	    }

	    public int getZipCode() {
	        return zipCode;
	    }

	    public String getJobTitle() {
	        return jobTitle;
	    }

	    public float getSalary() {
	        return salary;
	    }
	    
		// EmployeeBuilder class, nested within Employee class
		public static class EmployeeBuilder {
		    // mandatory
		    private String firstName;
		    private String lastName;
		    private String jobTitle;
		    private float salary;

		    // optional
		    private String streetAddress;
		    private String city;
		    private String state;
		    private int zipCode;
		    private String phoneNumber;

		    public EmployeeBuilder(String firstName, String lastName, 
		    						String jobTitle, float salary) {
		        this.firstName = firstName;
		        this.lastName = lastName;
		        this.jobTitle = jobTitle;
		        this.salary = salary;
		    }

		    public EmployeeBuilder setStreetAddress(String streetAddress) {
		        this.streetAddress = streetAddress;
		        return this;
		    }

		    public EmployeeBuilder setCity(String city) {
		        this.city = city;
		        return this;
		    }

		    public EmployeeBuilder setState(String state) {
		        this.state = state;
		        return this;
		    }

		    public EmployeeBuilder setZip(int zipCode) {
		        this.zipCode = zipCode;
		        return this;
		    }

		    public EmployeeBuilder setPhoneNumber(String phoneNumber) {
		        this.phoneNumber = phoneNumber;
		        return this;
		    }
		    
	        // last method in `EmployeeBuilder` class
	        public Employee build() {
	            return new Employee(this);
	        }
		}
	}

}
