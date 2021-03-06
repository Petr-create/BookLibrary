package com.company;

import com.response.Book;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    @RequestMapping(value ="/books/", method = RequestMethod.GET)
    public List<Book> list(){
        return Storage.getAllBooks();
    }

    @RequestMapping(value = "/books/", method = RequestMethod.POST)
    public int add(Book book){
        return Storage.addBook(book);
    }
}
