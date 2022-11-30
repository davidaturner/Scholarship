package com.wozu.demo;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.LogManager;
import java.util.logging.Logger;

import org.springframework.boot.autoconfigure.SpringBootApplication;

//Refactoring 
//means to alter the code in a way that improves it. This is a term widely used in 
//development to indicate that a change is being made to the code. Some IDE's such as Eclipse even 
//offer automatic refactoring of code to improve or perform basic tasks.

@SpringBootApplication
public class Application {

    // Creates an instance of the logger.
    private static Logger LOGGER = Logger.getLogger(Application.class.getName());

    private static final LogManager logManager = LogManager.getLogManager();

    static {

        try {
            String path = "src/main/resources/logging.properties";
            logManager.readConfiguration(new FileInputStream(path));

        } catch (IOException exception) {

            LOGGER.log(Level.SEVERE, "Error, could not load configuration file", exception);

        }

    }

    public static void main(String[] args) throws SecurityException, IOException {

        // Logs an Info level message to the console only if the log level is set to
        // info or greater.
        LOGGER.info("The name of the logger is: " + LOGGER.getName());

        // Logs a warning level log.
        LOGGER.warning("An ArrayIndexOutOfBoundsException may occur when using arrays.");

        // An array of size 3
        int[] a = { 1, 2, 3 };

        int index = 4;

        // Logs a config level message
        LOGGER.config(" The index is set to " + index);

        try {

            System.out.println(a[index]);

        } catch (ArrayIndexOutOfBoundsException ex) {

            // Logs a severe level message.
            LOGGER.log(Level.SEVERE, "Exception occurred", ex);

        }

    }

}