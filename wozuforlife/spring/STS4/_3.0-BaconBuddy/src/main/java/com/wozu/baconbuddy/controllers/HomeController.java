package com.wozu.baconbuddy.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.wozu.baconbuddy.models.Person;

@Controller
@RequestMapping({"/","/home"})
public class HomeController {

    @GetMapping()
    public String index(Model model) {
        model.addAttribute("person", new Person());

        // The string index will be looked for in src/main/resources/templates
        return "index";
    }

        // Remember Ctrl + Shift + O (Mac: Command + Shift + O) to auto import
    @PostMapping("/person")
    public String personSubmit(@ModelAttribute Person person) {
        return "result";
    }
}
