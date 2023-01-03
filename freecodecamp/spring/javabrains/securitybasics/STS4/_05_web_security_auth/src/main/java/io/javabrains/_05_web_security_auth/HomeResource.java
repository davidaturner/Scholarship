package io.javabrains._05_web_security_auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {
	
	@RequestMapping("/")
	public String home() {
		return "<h1>Hello, World!</h1>";
	}

}
