package com.dailycodebuffer.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mustache.MustacheEnvironmentCollector;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;

import com.samskivert.mustache.Mustache;

/*
 * Mustache can be used for HTML, config files, source code - anything. It works by expanding 
 * tags in a template using values provided in a hash or object. 
 * 
 * We call it "logic-less" because there are no if statements, else clauses, or for loops. 
 * Instead there are only tags. Some tags are replaced with a value, some nothing, and others 
 * a series of values. This document explains the different types of Mustache tags.
 * 
 * https://mustache.github.io/mustache.5.html
 */
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	/*
	 * Note: MustacheEnvironmentColler
	 * Deprecated. 
	 * since 2.5.0 for removal in 2.7.0 in favor of direct addition of values 
	 * from the Environment to the model
	 * 
	 */
	@Bean
	public Mustache.Compiler mustacheCompiler(
	  Mustache.TemplateLoader templateLoader, 
	  Environment environment) {

	    MustacheEnvironmentCollector collector
	      = new MustacheEnvironmentCollector();
	    collector.setEnvironment(environment);

	    return Mustache.compiler()
	      .defaultValue("Some Default Value")
	      .withLoader(templateLoader)
	      .withCollector(collector);
	}

}
