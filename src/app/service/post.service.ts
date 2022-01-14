import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  api = "";
  constructor(private http : HttpClient) { }

  getAllPost() : Observable<Post> {

    return this.http.get<Post>(this.api);
  } 
}
