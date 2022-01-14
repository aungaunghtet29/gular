import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './component/book/book-list/book-list.component';
import { CreateBookComponent } from './component/book/create-book/create-book.component';
import { EditBookComponent } from './component/book/edit-book/edit-book.component';
import { CreatePostComponent } from './component/post/create-post/create-post.component';
import { EditPostComponent } from './component/post/edit-post/edit-post.component';
import { PostListComponent } from './component/post/post-list/post-list.component';

const routes: Routes = [
  {
    path : 'home' , component : PostListComponent
  }
  ,
  {
    path : '' , redirectTo : 'home' , pathMatch : "full"
  },
  {
    path : 'gular-admin/add-post' , component : CreatePostComponent
  },
  {
    path : 'gular-admin/edit-post' , component : EditPostComponent
  },
  {
    path : 'book-list' , component : BookListComponent
  },
  {
    path : 'gular-admin/add-book' , component : CreateBookComponent
  },
  {
    path : 'gular-admin/edit-book' , component :EditBookComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
