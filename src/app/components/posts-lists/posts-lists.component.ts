import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/models/Post';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css']
})
export class PostsListsComponent implements OnInit {
  posts: Post[];
  visible: any;
  constructor(
    private postService: PostService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe( (posts: Post[]) => {
      this.posts = posts;
    });
    this.visible = this.authService.getRole('Admin', 'Editor');

  }

  editPost(postId){
    this.router.navigate(['/edit-post'], { queryParams: { postId: postId } });
  }

  deletePost(postId){
    this.postService.deletePost(postId).subscribe( () => {
      const postIndex = this.posts.findIndex( (post) => post.id === postId);
      this.posts.splice(postIndex, 1);
    });
  }

}
