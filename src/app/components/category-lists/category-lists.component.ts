import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.css']
})
export class CategoryListsComponent implements OnInit {
  categories: Category[];
  visible: any;
  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe( (categories: Category[]) => {
      this.categories = categories;
    });
    this.visible = this.authService.getRole('Admin', 'Editor');
  }

  editPost(postId){
    this.router.navigate(['/edit-post'], { queryParams: { postId: postId } });
  }

  deletePost(categoryId){
    this.categoryService.deletePost(categoryId).subscribe( () => {
      const postIndex = this.categories.findIndex( (category) => category.id === categoryId);
      this.categories.splice(postIndex, 1);
    });
  }

}
