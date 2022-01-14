import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  Posts : any = [];

  constructor(private postServce : PostService) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(){
    this.postServce.getAllPost().subscribe(data => 
      {
          this.Posts = data;
      } 
      )
  }

  deletePost(){
    
  }


}
