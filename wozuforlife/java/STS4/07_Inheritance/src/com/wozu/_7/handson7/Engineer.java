package com.wozu._7.handson7;

public class Engineer extends Employee {
	public static String EMPLOYEE_ENGINEER = "Engineer";
	private String jobTitle;
	
	public Engineer() {
		super();
		this.jobTitle = EMPLOYEE_ENGINEER;
	}

	public Engineer(String firstName, String lastName, String companyName, int yearsAtCompany) {
		super(firstName, lastName, companyName, yearsAtCompany);
		this.jobTitle = EMPLOYEE_ENGINEER;
	}

	
	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	@Override
	public String toString() {
		return super.toString() + AS_A + jobTitle;
	}	
}
