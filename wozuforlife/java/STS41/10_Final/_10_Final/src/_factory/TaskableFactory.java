package _factory;

import java.util.ArrayList;
import java.util.List;

import _interfaces.AbstractFactory;
import _interfaces.Taskable;
import classes.CompleteableTask;
import classes.SimpleTask;

public class TaskableFactory implements AbstractFactory<Taskable> {
	
	public static void main(String[] args) {

		String[] taskPageDescriptions = {
				"Add a task",
				"Remove a task",
				"Mark a task complete",
				"List all tasks"
		};
		
		TaskableFactory factory = new TaskableFactory();
//		Taskable simpleTask = factory.create(Taskable.SIMPLE, 1, "Add a task");
//		Taskable completeableTask = factory.create(Taskable.COMPLETEABLE, 1, "Wash my face");
//		System.out.println(simpleTask.describe());
//		((CompleteableTask)completeableTask).complete();
//		System.out.println(completeableTask.describe());
		
//		List<Taskable>taskPage = factory.create(Taskable.SIMPLE, taskPageDescriptions);
		List<Taskable>taskPage = factory.createTaskPage(taskPageDescriptions);
		for(Taskable task : taskPage) {
			System.out.println(task.describe());
		}
	}

	@Override
	public Taskable create(String taskableType) {
        if (Taskable.SIMPLE.equalsIgnoreCase(taskableType)) {
            return new SimpleTask();
        } else if (Taskable.COMPLETEABLE.equalsIgnoreCase(taskableType)) {
            return new CompleteableTask();
        }

        return null;
	}
	
	public Taskable create(String taskableType, int id, String description) {
		
		Taskable taskable = create(taskableType);
		if (taskable != null) {
			((SimpleTask)taskable).setId(id);
			((SimpleTask)taskable).setDescription(description);			
		}
		return taskable;
	}
	
	public List<Taskable> create(String taskableType, String[] descriptions) {
		List<Taskable> tasks = new ArrayList<Taskable>();
		
		if ((Taskable.SIMPLE.equalsIgnoreCase(taskableType)) ||
			(Taskable.COMPLETEABLE.equalsIgnoreCase(taskableType))) {

			int i=1;
			for( String description : descriptions) {
				tasks.add(create(taskableType, i, description));
				i++;
			}
		}
		return tasks;	
	}
	
	public List<Taskable> createTaskPage(String[] descriptions) {
		
		return create(Taskable.SIMPLE, descriptions);
	}

}
