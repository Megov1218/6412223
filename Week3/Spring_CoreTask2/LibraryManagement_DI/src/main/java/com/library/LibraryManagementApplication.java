package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        // Load Spring Container
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService Bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Test Dependency Injection
        bookService.addBook("AgniPankh");

        ((ClassPathXmlApplicationContext) context).close();
    }
}
