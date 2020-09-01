package com.book.bookrestapi.domain;

public class Book {
	private Long id;
	private String title;
	private String author;
	private String coverPhotoUrl;
	private Long isbnNumber;
	private Double price;
	private String language;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getCoverPhotoUrl() {
		return coverPhotoUrl;
	}
	public void setCoverPhotoUrl(String coverPhotoUrl) {
		this.coverPhotoUrl = coverPhotoUrl;
	}
	public Long getIsbnNumber() {
		return isbnNumber;
	}
	public void setIsbnNumber(Long isbnNumber) {
		this.isbnNumber = isbnNumber;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
}
