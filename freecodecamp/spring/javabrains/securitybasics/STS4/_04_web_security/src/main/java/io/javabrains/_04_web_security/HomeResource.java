package io.javabrains._04_web_security;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {
	
	@RequestMapping("/")
	public String home() {
		return "<h1>Hello, World!</h1>";
	}

	@RequestMapping("/user")
	public String user() {
		return "<h1>Hello, User!</h1>";
	}
	
	@RequestMapping("/admin")
	public String admin() {
		return "<h1>Hello, Admin!</h1>";
	}
}
