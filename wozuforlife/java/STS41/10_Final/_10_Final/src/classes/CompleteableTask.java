package classes;

import _interfaces.Completeable;
import _interfaces.Taskable;

public class CompleteableTask extends SimpleTask implements Completeable {

	private boolean complete;
	
	public CompleteableTask() {
		super();
		complete = false;
	}

	public static void main(String[] args) {
		CompleteableTask task = new CompleteableTask();
		task.setId(1);
		task.setDescription("Wash my face");
		task.complete();
		System.out.println(task.describe());
	}

	@Override
	public void complete() {
		complete = true;		
	}
	
	@Override
	public String getTaskable() {
		return Taskable.COMPLETEABLE;
	}
	
	@Override
	public String describe() {
		String describe = super.describe();
		if (complete) {
			describe += " (COMPLETE)";
		}
		return describe;
	}

}
