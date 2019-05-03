import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PostService } from './post.service';
import { PostsListsComponent } from './components/posts-lists/posts-lists.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthGuard } from './components/auth/auth.guard';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatMenuModule,
  MatTableModule,
  MatChipsModule,
  MatDividerModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTabsModule
} from "@angular/material";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListsComponent } from './components/category-lists/category-lists.component';
import { AuthInterceptor } from './components/auth/auth-interceptor';
import { UserService } from './user.service';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostsListsComponent,
    AddPostComponent,
    EditPostComponent,
    LoginComponent,
    SignupComponent,
    AddCategoryComponent,
    CategoryListsComponent,
    UserListsComponent,
    EditUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTableModule,
    MatChipsModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    PostService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
