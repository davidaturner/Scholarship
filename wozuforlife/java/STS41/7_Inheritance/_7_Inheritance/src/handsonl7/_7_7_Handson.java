package handsonl7;

public class _7_7_Handson {

	public static void main(String[] args) {
		Employee emp = new Employee("Bog", "Smith", "ACME, Inc.", 2);
		System.out.println(emp);
		
		Engineer eng = new Engineer();
		eng.setFirstName("Tim");
		eng.setLastName("Clowny");
		eng.setCompanyName("ACME, Inc.");
		eng.setYearsAtCompany(5);
		eng.setJobTitle("Engineer");
		System.out.println(eng);
		
		Manager mgr = new Manager("Papa", "Roach", "ACME, Inc.", 5, "Manager");
		System.out.println(mgr);

	}
	
	public static class Employee {
		String firstName;
		String lastName;
		String companyName;
		int yearsAtCompany;
		
		public Employee() {
			firstName= "";
			lastName = "";
			companyName = "";
			yearsAtCompany = -1;
					
		}
		
		public Employee(String firstName, String lastName, String companyName, int yearsAtCompany) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.companyName = companyName;
			this.yearsAtCompany = yearsAtCompany;
		}

		@Override
		public String toString() {
			return firstName+" "+lastName+" has worked at " + companyName+" for " + yearsAtCompany+" year(s).";
		}
		
		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getCompanyName() {
			return companyName;
		}

		public void setCompanyName(String companyName) {
			this.companyName = companyName;
		}

		public int getYearsAtCompany() {
			return yearsAtCompany;
		}

		public void setYearsAtCompany(int yearsAtCompany) {
			this.yearsAtCompany = yearsAtCompany;
		}
	}

	public static class Engineer extends Employee {
		
		String jobTitle;
		public Engineer() {
			super();
			jobTitle = "";
		}
		public Engineer(String firstName, String lastName, String companyName, int yearsAtCompany, String jobTitle) {
			super(firstName, lastName, companyName, yearsAtCompany);
			this.jobTitle = jobTitle;
		}

		@Override
		public String toString() {
			return super.toString().substring(0, super.toString().length()-1) + " as a(n) " + jobTitle + ".";
		}
		
		public String getJobTitle() {
			return jobTitle;
		}
		public void setJobTitle(String jobTitle) {
			this.jobTitle = jobTitle;
		}
	}

	public static class Manager extends Employee {
		
		String jobTitle;
		public Manager() {
			super();
			jobTitle = "";
		}
		public Manager(String firstName, String lastName, String companyName, int yearsAtCompany, String jobTitle) {
			super(firstName, lastName, companyName, yearsAtCompany);
			this.jobTitle = jobTitle;
		}

		@Override
		public String toString() {
			return super.toString().substring(0, super.toString().length()-1) + " as a(n) " + jobTitle + ".";
		}
		
		public String getJobTitle() {
			return jobTitle;
		}
		public void setJobTitle(String jobTitle) {
			this.jobTitle = jobTitle;
		}
	}

}
