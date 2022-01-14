import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateBookComponent } from './component/book/create-book/create-book.component';
import { EditBookComponent } from './component/book/edit-book/edit-book.component';
import { BookListComponent } from './component/book/book-list/book-list.component';
import { CreatePostComponent } from './component/post/create-post/create-post.component';
import { EditPostComponent } from './component/post/edit-post/edit-post.component';
import { PostListComponent } from './component/post/post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    EditBookComponent,
    BookListComponent,
    CreatePostComponent,
    EditPostComponent,
    PostListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
