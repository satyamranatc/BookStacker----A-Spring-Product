package com.manage.backend.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.annotation.ObjectIdGenerators.None;
import com.manage.backend.Models.BookModel;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/api/book")
@CrossOrigin()
public class BookController 
{
    ArrayList <BookModel> allBooks = new ArrayList<BookModel>();
    
    @GetMapping("/list")
    public List<BookModel> getAllBooks() 
    {
        return allBooks;
    }

    @GetMapping("/byId/{id}")
    public BookModel getBookById(@PathVariable int id)
    {
        for(BookModel B : allBooks)
        {
            if(B.getBookId() == id)
            {
                return B;
            }
        }

        return null;
    }

    @PostMapping("/add")
    public String addBook(@RequestBody BookModel newBook) {

       for(BookModel B : allBooks)
        {
            if(B.getBookId() == newBook.getBookId())
            {
               return "Book Already exists!";
            }
        }

        allBooks.add(newBook);
        return "Added Successfully!";
    }

    @PutMapping("/update/{id}")
    public String updateBook(@PathVariable int id, @RequestBody BookModel newBook) {
        
         for(BookModel B : allBooks)
        {
            if(B.getBookId() == newBook.getBookId())
            {
              B.BookName = newBook.getBookName();
              B.BookAuthor = newBook.getBookAuthor();
              B.BookDescription = newBook.getBookDescription();
              B.BookImage = newBook.getBookImage();
              B.CategoryId = newBook.getCategoryId();
              return "Updated Successfully!";
            }
        }

        return "Book Not Found!";
        
    }
    

    @DeleteMapping("/delete/{id}")
    public String deleteBook(@PathVariable int id) 
    {
        for(int i = 0; i < allBooks.size(); i++)
        {
            if(allBooks.get(i).getBookId() == id)
            {
                allBooks.remove(i);
                return "Deleted Successfully!";
            }
        }
        return "Book Not Found!";
    }
    



}
