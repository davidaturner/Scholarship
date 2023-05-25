package classes;

import _interfaces.Taskable;

public class SimpleTask implements Taskable {

	private int id;
	private String description;
	
	public static void main(String[] args) {
		
		SimpleTask task = new SimpleTask();
		task.setId(1);
		task.setDescription("Add a task");
		System.out.println(task.describe());
	}

	@Override
	public String getTaskable() {
		return Taskable.SIMPLE;
	}

	@Override
	public String describe() {
		return id + ". " + description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}



}
