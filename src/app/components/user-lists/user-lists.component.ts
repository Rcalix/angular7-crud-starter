import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (users: User[]) => {
      console.log(users)
      this.users = users;
    });
  }

  editUser(userId){
    this.router.navigate(['/edit-user'], { queryParams: { userId: userId } });
  }

  deleteUser(userId){
    this.userService.deleteUser(userId).subscribe( () => {
      const postIndex = this.users.findIndex( (user) => user.id === userId);
      this.users.splice(postIndex, 1);
    });
  }

}
