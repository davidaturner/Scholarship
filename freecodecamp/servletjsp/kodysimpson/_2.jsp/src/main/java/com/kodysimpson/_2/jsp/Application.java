package com.kodysimpson._2.jsp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*
 * https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web.servlet.embedded-container.jsp-limitations
 * 
 * JSP Limitations
When running a Spring Boot application that uses an embedded servlet container (and is 
packaged as an executable archive), there are some limitations in the JSP support.

With Jetty and Tomcat, it should work if you use war packaging. An executable war will 
work when launched with java -jar, and will also be deployable to any standard container. 
JSPs are not supported when using an executable jar.

Undertow does not support JSPs.

Creating a custom error.jsp page does not override the default view for error handling. 
Custom error pages should be used instead.
 */

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
