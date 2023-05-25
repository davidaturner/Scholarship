package finalproject;

import java.util.Scanner;

import _interfaces.Taskable;
import classes.CompleteableTaskManager;

public class MyTODOManager {

	public static String[] todoTasks = {
			"Add a task",
			"Remove a task",
			"Mark a task complete",
			"List all tasks"
	};
	
	public static String PROMPT_TASKPAGE = "What would you like to do? (0=Quit)";
	public static String PROMPT_ADDTASK = "What task do you want to add? ";
	public static String PROMPT_REMOVETASK = "Which task do you want to remove?";
	public static String PROMPT_MAKETASKCOMPLETE = "Which task do you want to mark complete?";
	
	public static int TOBELISTED = 4;
	
	
	public static CompleteableTaskManager taskManager;
	public static Scanner sc;
	
	public static void main(String[] args) {
		
		run();

	}
	
	public static void run() {
		
		sc = new Scanner(System.in);
		
		taskManager = setTaskManager();		
		boolean isDone = false;
		
		while( !isDone) {
			
			int choice = selectFromTaskPage();
			switch (choice) {
			
			case 1:
				addTask();
				pressEnter();
				break;
			case 2:
				removeTask();
				pressEnter();
				break;
			case 3:
				markTaskComplete();
				pressEnter();
				break;
			case 4:
//				listAllTasks();
				listTasks(TOBELISTED);
				pressEnter();
				break;
			default:
				isDone = true;
			};

		};
		
		System.out.println("\nDONE!");
		sc.close();
	}
	
	public static CompleteableTaskManager setTaskManager() {
		CompleteableTaskManager taskManager = new CompleteableTaskManager();
		taskManager.setTaskPage(todoTasks);
		return taskManager;
	}
	
	public static int selectFromTaskPage() {
		
//		System.out.println();
		for(Taskable task : taskManager.getTaskPage()) {
			System.out.println(task.describe());
		}
		System.out.println("\n" + PROMPT_TASKPAGE);
		int choice = 0; // Quit
		try {
			choice = sc.nextInt();
			sc.nextLine();	// don't forget the CRLF
		} catch(Exception e) {
			System.out.println("Invalid choice!");
		}
		return choice;
	}
	
	public static void addTask() {

		System.out.println("\n" + PROMPT_ADDTASK);
		String description = sc.nextLine();
		if (taskManager.addToTasks(description)) {
			displayStatus("added");
		} else {
			System.out.println("Unable to add task!");			
		};
	}
	
	public static void removeTask() {
		listAllTasks();
		System.out.println("\n" + PROMPT_REMOVETASK);
		int taskToBeRemoved = sc.nextInt();
		sc.nextLine(); // don't forget the CRLF.
		if( taskManager.removeFromTasks(
				taskManager.getTaskById(taskToBeRemoved))) {
			displayStatus("removed");	
		} else {
			System.out.println("Unable to remove task!");
		};
	}
	
	public static void markTaskComplete() {
		listAllTasks();
		System.out.println("\n" + PROMPT_MAKETASKCOMPLETE);
		int taskToBeCompleted = sc.nextInt();
		sc.nextLine(); // don't forget the CRLF.
		if ( taskManager.markTaskComplete(
				taskManager.getTaskById(taskToBeCompleted))) {
			displayStatus("updated");
		}
	}
	
	public static void listAllTasks() {
		System.out.println();
		for(Taskable task : taskManager.getCompleteableTasks()) {
			System.out.println(task.describe());
		}
	}
	
	public static void listTasks(int numberOfTaskablesToBeListed) {
		System.out.println();
		taskManager.listTasks(numberOfTaskablesToBeListed);
	}
	
	public static void pressEnter() {
		System.out.println("Press ENTER");
		sc.nextLine();
	}
	
	public static void displayStatus(String action) {
		
		System.out.println("\nTask " + action + "! Tasks count: " +
								(taskManager.getCompleteableTasks()).size());
	}

}
