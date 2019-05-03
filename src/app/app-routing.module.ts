import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'login', component: LoginComponent
  },
  { 
    path: 'signup', component: SignupComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    canActivate: [AuthGuard] 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
