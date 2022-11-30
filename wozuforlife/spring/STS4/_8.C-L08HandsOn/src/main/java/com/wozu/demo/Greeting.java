package com.wozu.demo;

public class Greeting {

	private long counter;
	private String template;

	public Greeting(long counter, String template) {
		super();
		this.counter = counter;
		this.template = template;
	}
	
	public long getCounter() {
		return counter;
	}

	public void setCounter(long counter) {
		this.counter = counter;
	}

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

}
