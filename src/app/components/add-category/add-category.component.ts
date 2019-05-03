import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { CategoryService } from 'src/app/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categories: Category[];
  addForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private data: DataService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data.changeTitle("Add Category")
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });

    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.addForm.value)
    
    if(this.addForm.valid){
      this.categoryService.createCategory(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
    }
  }

  get f() { return this.addForm.controls; }

}
