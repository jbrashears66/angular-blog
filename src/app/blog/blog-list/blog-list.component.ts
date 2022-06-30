import { Component, OnInit } from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";

import {Observable} from "rxjs";
import { async } from 'rxjs';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

 // links$: Observable<ScullyRoute[]> = this.scully.available$;
  posts: ScullyRoute[] = [] ;
  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.getPublishedPosts();
  }
  getPublishedPosts() {
    this.scully.available$.subscribe(posts => {
      this.posts = posts.filter(post => post.title);
    });
  }


  }
