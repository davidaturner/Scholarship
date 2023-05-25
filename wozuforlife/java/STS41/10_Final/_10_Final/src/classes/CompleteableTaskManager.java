package classes;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import _factory.FactoryProvider;
import _factory.TaskableFactory;
import _interfaces.TaskListable;
import _interfaces.TaskManageable;
import _interfaces.Taskable;

public class CompleteableTaskManager implements TaskManageable, TaskListable {

	private TaskableFactory taskFactory = null;

	private List<Taskable> taskPage = null;

	private List<Taskable> completeableTasks = null;
	

	private int lastCompleteableTaskId = 1;
	
	// list tasks variables
	private int numberOfTaskablesToList;
	private int startingIndex;
	private List<Taskable> listed;
	
	
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		CompleteableTaskManager manager = new CompleteableTaskManager();
		manager.createCompleteableTasks();
		int numberOfListed = 3;
		
		int startingIndex = 1;
		int endingIndex = startingIndex + numberOfListed;
		
		manager.listTasks(numberOfListed);
		manager.printListed();
		System.out.println("Listed! " + + startingIndex + " " + endingIndex + " " + 
							manager.getCompleteableTasks().size());
		
		System.out.println("\n" + "Command? ");
		String choice = sc.next();
		sc.nextLine();
		System.out.println(choice);
		
		if ('f' == choice.charAt(0)) {
			manager.listNext();
			manager.printListed();
			System.out.println("Listed! " + manager.getListed().size());
			manager.listNext();
			manager.printListed();
			System.out.println("Listed! " + manager.getListed().size());
			manager.listPrevious();
			manager.printListed();
			System.out.println("Listed! " + manager.getListed().size());
			manager.listPrevious();
			manager.printListed();
			System.out.println("Listed! " + manager.getListed().size());		
		} else {
			System.out.println("Oops!");
		}

	}

	public CompleteableTaskManager() {	
		taskFactory = (TaskableFactory) FactoryProvider.getFactory(FactoryProvider.TASKABLE);
	}
	
	// getters and setters
	public List<Taskable> getTaskPage() {
		return taskPage;
	}

	public void setTaskPage(String[] taskPageDescriptions) {
		taskPage = taskFactory.createTaskPage(taskPageDescriptions);
	}
	
//	public static void setTaskPage(List<Taskable> taskPage) {
//		CompleteableTaskManager.taskPage = taskPage;
//	}
	
	public List<Taskable> getCompleteableTasks() {
		return completeableTasks;
	}

	public void setCompleteableTasks(List<Taskable> completeableTasks) {
		this.completeableTasks = completeableTasks;
	}

	public TaskableFactory getTaskFactory() {
		return taskFactory;
	}
	
	public void setTaskFactory(TaskableFactory taskFactory) {
		this.taskFactory = taskFactory;
	}
	
	public List<Taskable> getListed() {
		return listed;
	}
	
	// class methods
	public boolean addToTasks(String description) {
		
		return addToTasks(taskFactory.create(Taskable.COMPLETEABLE, 0, description));
	}
	
	public boolean markTaskComplete(Taskable taskToBeUpdated) {
		if (completeableTasks == null) {
			return false;
		}
		((CompleteableTask)taskToBeUpdated).complete();
		return updateToTasks(taskToBeUpdated);
	}
	
	// interface methods
	@Override
	public boolean addToTasks(Taskable taskToBeAdded) {
		if (completeableTasks == null) {
			completeableTasks= new ArrayList<Taskable>();
		}
		Taskable added = taskFactory.create(Taskable.COMPLETEABLE, lastCompleteableTaskId,
											((SimpleTask)taskToBeAdded).getDescription());
		if (added != null) {
			lastCompleteableTaskId++;
			return completeableTasks.add(added);
		}
		return false;
	}

	@Override
	public boolean removeFromTasks(Taskable taskToBeRemoved) {
		if (completeableTasks == null) {
			return false;
		}
		return completeableTasks.remove(taskToBeRemoved);
	}

	@Override
	public boolean updateToTasks(Taskable taskToBeUpdated) {

		if (completeableTasks == null) {
			return false;
		}
		int taskIdToBeUpdated = completeableTasks.indexOf(taskToBeUpdated);
		if (taskIdToBeUpdated > 0) {
			Taskable updated = completeableTasks.set(taskIdToBeUpdated, taskToBeUpdated);
			if (updated != null) {
				return true;
			}
		}
		return false; 
	}
	
	@Override
	public Taskable getTaskById(int taskId) {

		if (completeableTasks != null && !completeableTasks.isEmpty()) {
			for(Taskable task : completeableTasks) {
				if (((CompleteableTask)task).getId() == taskId) {
					return task;			
				}
			}
		}
		return null;
	}
	
	@Override
	public boolean listTasks(int numberOfTaskablesToList) {
		
		this.numberOfTaskablesToList = numberOfTaskablesToList;
		startingIndex = 0;
		return listNext();
	}
	
	@Override
	public boolean listNext() {
		return listNext(true);
	}

	private boolean listNext(boolean movingForward) {
		
		if (listingAllowed(completeableTasks.size() > startingIndex)) {
			System.out.println("Index starting = " + startingIndex);
			int endingIndex = (completeableTasks.size() < startingIndex + numberOfTaskablesToList)?
								completeableTasks.size() : startingIndex + numberOfTaskablesToList;
								
			listed = new ArrayList<Taskable>();
			for(int i=startingIndex; i<endingIndex; i++) {
				listed.add(completeableTasks.get(i));
				if (movingForward) {
					startingIndex++;					
				}
			}
			System.out.println("Index ending = " +startingIndex);
			return true;
		}
		return false;		
	}
	@Override
	public boolean listPrevious() {
		startingIndex = (startingIndex - (2*numberOfTaskablesToList) < 0)? 0:
							startingIndex - (2*numberOfTaskablesToList);
		return listNext(false);
	}
	
	private boolean listingAllowed(boolean theWayForward) {
		
		return  (numberOfTaskablesToList > 0 &&
				completeableTasks != null &&
				numberOfTaskablesToList < completeableTasks.size() &&
				startingIndex >= 0 &&
				startingIndex < completeableTasks.size() &&
				theWayForward);
		
	}
	
	// additional methods
	@SuppressWarnings("unused")
	private void printTaskPage() {
		
		for(Taskable task : getTaskPage()) {
			System.out.println(((SimpleTask) task).describe());
		}
	}
	
	@SuppressWarnings("unused")
	private void printAllTasks() {
		
		for(Taskable task : getCompleteableTasks()) {
			System.out.println(((CompleteableTask)task).describe());
		}
	}
	
	@SuppressWarnings("unused")
	private void printListed() {
		
		for(Taskable task : getListed()) {
			System.out.println(((CompleteableTask)task).describe());
		}
	}
	
	@SuppressWarnings("unused")
	private void createTaskPage() {
		String[] taskPageDescriptions = {
				
				"Add a task",
				"Remove a task",
				"Mark a task complete",
				"List all tasks"
		};
		
		taskPage = taskFactory.createTaskPage(taskPageDescriptions);
	}
	
	@SuppressWarnings("unused")
	private void createCompleteableTasks() {
		
		String[] testCompleteables = {
		
				"Wash my face",
				"Brush my teeth",
				"Put on a suit",
				"Eat breakfast",
				"Drive to work"
		};
		
		for(String description : testCompleteables) {
			addToTasks(taskFactory.create(Taskable.COMPLETEABLE, 0, description));			
		}		
	}

}
