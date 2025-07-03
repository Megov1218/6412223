package com.library;

	

	import com.library.service.BookService;
	import org.springframework.context.ApplicationContext;
	import org.springframework.context.support.ClassPathXmlApplicationContext;

	public class MainApp {

	    public static void main(String[] args) {

	        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

	        // Get BookService bean from context
	        BookService bookService = (BookService) context.getBean("bookService");

	        // Test method
	        bookService.addBook("Mrutyunjay : Karna The Grat Warrior");

	        ((ClassPathXmlApplicationContext) context).close();
	    }
	}



