package io.javabrains._03_web_only;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {

	@GetMapping("/")
	public String home() {
		return("<h1>Welcome!</h1>");
	}
}
