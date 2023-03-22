import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck {
  post = {title: '', text: '', avatarURL: ''};
  charsetAmount = 0;

  addPost(newPost: any) {
    this.post.title = newPost.title
    this.post.text = newPost.text
    this.post.avatarURL = newPost.avatarURL
  }

  removeUser() {
   this.post.avatarURL = '';
    this.post.title = '';
    this.post.text = '';
    this.charsetAmount = 0;
  }

  ngOnInit() {
    this.charsetAmount = this.post.text.length
  }

  ngDoCheck() {
    this.charsetAmount = this.post.text.length
  }
}