package io.javabrains._04_web_security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	/*
	* Add a couple APIs - user and admin.
	* Use HttpSecurity to configure authorization.
	 */
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
