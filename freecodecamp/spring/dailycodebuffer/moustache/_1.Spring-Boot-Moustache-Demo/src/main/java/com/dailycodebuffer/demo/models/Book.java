package com.dailycodebuffer.demo.models;

public class Book {

	private Long bookid;
	private String isbn;
	private String title;
	private String author;
	private Double price;
	
	// constructor
	public Book(Long bookid, String isbn, String title, String author, Double price) {
		super();
		this.bookid = bookid;
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.price = price;
	}
	
	// getters and setters
	public Long getBookid() {
		return bookid;
	}
	public void setBookid(Long bookid) {
		this.bookid = bookid;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
}
