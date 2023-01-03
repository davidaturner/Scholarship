package com.wozu._7.handson7;

public class Main {

	public static void main(String[] args) {

		String companyName = "ACME";
		
		Employee jill = new Employee();
		jill.setFirstName("Jilly");
		jill.setLastName("Constance");
		jill.setCompanyName(companyName);
		jill.setYearsAtCompany(10);
		System.out.println(jill.toString());
		
		Employee jackal = new Employee("Jackal","Thom", companyName, 123);
		System.out.println(jackal.toString());
				
		Engineer freddie = new Engineer("Freddie", "Isded", companyName, 5);
		freddie.setJobTitle("Sr Developer");
		System.out.println(freddie.toString());
		
		Manager ladyness = new Manager("The Lady", "", companyName, 1);
		System.out.println(ladyness.toString());
	}

}
