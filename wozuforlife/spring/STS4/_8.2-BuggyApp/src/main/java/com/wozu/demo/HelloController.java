package com.wozu.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @RequestMapping("/helloworld")
    public @ResponseBody String greeting() {
        return "Hello World";
    }

}
