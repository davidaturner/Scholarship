package _interfaces;

public interface TaskManageable {

	boolean addToTasks(Taskable taskToBeAdded);
	boolean removeFromTasks(Taskable taskToBeRemoved);
	boolean updateToTasks(Taskable taskToBeUpdated);
	
	Taskable getTaskById(int taskId);
	
}
