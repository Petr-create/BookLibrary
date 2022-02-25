package com.company;

import com.response.Book;

import java.util.ArrayList;
import java.util.List;

public class Storage {
    private static ArrayList<Book> books = new ArrayList<>();

    public static List<Book> getAllBooks(){
        return books;
    }

    public static int addBook(Book book){
        int id = books.size() + 1;
        books.add(book);
        book.setId(id);
        return id;
    }
}
