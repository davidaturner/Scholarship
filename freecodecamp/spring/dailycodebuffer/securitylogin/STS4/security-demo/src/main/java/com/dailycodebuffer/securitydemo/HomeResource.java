package com.dailycodebuffer.securitydemo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {

	@RequestMapping("/")
	public String home() {
		return "<h1>Home</h1>";
	}
	
	@RequestMapping("/user")
	public String user() {
		return "<h1>User</h1>";
	}
	
	@RequestMapping("/")
	public String admin() {
		return "<h1>Admin</h1>";
	}
}
