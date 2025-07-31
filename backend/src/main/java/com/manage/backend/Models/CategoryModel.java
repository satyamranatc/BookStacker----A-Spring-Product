package com.manage.backend.Models;



public class CategoryModel {

    public int CategoryId;
    public String CategoryName;
    public String CategoryDesc;

    public CategoryModel(int CategoryId, String CategoryName, String CategoryDesc) {
        this.CategoryId = CategoryId;
        this.CategoryName = CategoryName;
        this.CategoryDesc = CategoryDesc;
    }

    public int getCategoryId() {
        return CategoryId;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public String getCategoryDesc() {
        return CategoryDesc;
    }


    
}
