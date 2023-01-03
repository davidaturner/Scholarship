package io.javabrains._03_web_only;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	/*
	 * Web only.
	 * Add HomeResource and run.
	 * Add spring-boot-starter-security in pom.xml and run again.
	 * Copy generated password from console. Default user = "user".
	 * Enter user and password on login screen. submit.
	 * Update application.properties with spring.security.user name 
	 * 	and password to override.
	 * 
	 */
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
