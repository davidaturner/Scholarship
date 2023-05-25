package _factory;

import java.util.List;

import _interfaces.AbstractFactory;
import _interfaces.Taskable;

public class FactoryProvider {

	public static String TASKABLE = "Taskable";	
	
	public static void main(String[] args) {
	
		String[] descriptions = {
				"Add a task",
				"Remove a task",
				"Mark a task as complete",
				"List a task"
		};
		
		TaskableFactory factory = (TaskableFactory)FactoryProvider.getFactory(TASKABLE);
		List<Taskable>taskPage = factory.createTaskPage(descriptions);
		for(Taskable task : taskPage) {
			System.out.println(task.describe());
		}
	}
	
	@SuppressWarnings("rawtypes")
	public static AbstractFactory getFactory(String factoryType) {
		
        if(FactoryProvider.TASKABLE.equalsIgnoreCase(factoryType)){
            return new TaskableFactory();
        };
        
        return null;
	}

}
