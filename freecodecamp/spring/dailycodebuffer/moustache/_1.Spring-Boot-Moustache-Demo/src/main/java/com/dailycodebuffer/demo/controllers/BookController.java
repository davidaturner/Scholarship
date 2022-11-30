package com.dailycodebuffer.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.dailycodebuffer.demo.models.Book;

@Controller
public class BookController {

	@GetMapping("/books")
	public ModelAndView getBook(Map<String, Object> model) {

	    List<Book> bookList = IntStream.range(0, 6)
	      .mapToObj(i -> getBook(i))
	      .collect(Collectors.toList());

	    model.put("bookList", bookList);

	    return new ModelAndView("book", model);
	}
	
	private Book getBook(int i) {
	return new Book(Long.valueOf(i), "ISBN Number -" + i, "Title -" + i, 
			"Author -"+ i, Double.valueOf(i*100));
	}
}
