package com.wozu.dogo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
    	
    	/*
    	 * Notice the file extension is included. This is required to find the file because you are 
    	 * not using the Thymeleaf dependency which would automatically search for a file that contains 
    	 * .html as the suffix.
    	 */
        return "index.html";
    }
}
