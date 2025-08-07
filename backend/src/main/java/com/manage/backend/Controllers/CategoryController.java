package com.manage.backend.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manage.backend.Models.CategoryModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/category")
@CrossOrigin()
public class CategoryController {

    ArrayList <CategoryModel> allCategories = new ArrayList<CategoryModel>();

    // public CategoryController()
    // {
    //     for(int i = 1; i<= 3; i++)
    //     {
    //         allCategories.add(new CategoryModel(i, "Category " + i, "Category " + i + " Description"));
    //     }
    // }

    @GetMapping("/list")
    public List<CategoryModel> getallCategories() {
        return allCategories;
    }

    @PostMapping("/add")
    public String addCategory(@RequestBody CategoryModel newCategory) {

        for(CategoryModel C : allCategories)
        {
            if(C.getCategoryId() == newCategory.getCategoryId())
            {
               return "Category Already exists!";
            }
        }

        allCategories.add(newCategory);
        return "Added Successfully!";
        
    }
    
    

}
