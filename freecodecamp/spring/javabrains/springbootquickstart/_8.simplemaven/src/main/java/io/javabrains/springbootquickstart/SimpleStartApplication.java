package io.javabrains.springbootquickstart;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//After you update the POM.xml to add parent, dependencies, and properties,
//create top level Application class (with Main).
@SpringBootApplication
public class SimpleStartApplication {

//	Run as a java application.
	public static void main(String[] args) {
		SpringApplication.run(SimpleStartApplication.class, args);
	}
}
