package com.manage.backend.Models;

public class BookModel 
{

    public String BookId;
    public String BookImage;
    public String BookName;
    public String BookAuthor;
    public String BookDescription;
    public int CategoryId;

    public BookModel(String BookId, String BookImage, String BookName, String BookAuthor, String BookDescription,int CategoryId) {
        this.BookId = BookId;
        this.BookImage = BookImage;
        this.BookName = BookName;
        this.BookAuthor = BookAuthor;
        this.BookDescription = BookDescription;
        this.CategoryId = CategoryId;
    }
    public int getBookId()
    {
        return Integer.parseInt(BookId);
    }

    public int getCategoryId() {
        return CategoryId;
    }

    public String getBookName() 
    {
        return BookName;
    }

    public String getBookAuthor() {
        return BookAuthor;
    }

    public String getBookDescription() {
        return BookDescription;
    }

    public String getBookImage() {
        return BookImage;
    }
    
}
