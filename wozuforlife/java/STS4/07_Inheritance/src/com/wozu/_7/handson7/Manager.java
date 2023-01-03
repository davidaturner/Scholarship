package com.wozu._7.handson7;

public class Manager extends Employee {
	public static String EMPLOYEE_MANAGER = "Manager";
	private String jobTitle;
	
	public Manager() {
		super();
		this.jobTitle = EMPLOYEE_MANAGER;
	}

	public Manager(String firstName, String lastName, String companyName, int yearsAtCompany) {
		super(firstName, lastName, companyName, yearsAtCompany);
		this.jobTitle = EMPLOYEE_MANAGER;
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
