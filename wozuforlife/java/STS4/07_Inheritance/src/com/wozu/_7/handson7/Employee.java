package com.wozu._7.handson7;

public class Employee {
	protected String AS_A = " as a(n) ";
	
	public String firstName;
	public String lastName;
	public String companyName;
	public int yearsAtCompany;

	public Employee() {
		yearsAtCompany = -1;
	}

	public Employee(String firstName, String lastName, String companyName, int yearsAtCompany) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.companyName = companyName;
		this.yearsAtCompany = yearsAtCompany;
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

	@Override
//	public String toString() {
//		return "Employee [firstName=" + firstName + ", lastName=" + lastName + ", companyName=" + companyName
//				+ ", yearsAtCompany=" + yearsAtCompany + "]";
//	}
	public String toString() {
		return firstName + " " + lastName + " has worked at " + companyName + " for " + yearsAtCompany + " year(s)";
	}
}
