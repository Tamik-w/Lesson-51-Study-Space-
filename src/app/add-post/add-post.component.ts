import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {

@Output() onPost = new EventEmitter();

  titleInputValue = '';
  textInputValue = '';
  avatarURLInputValue = '';

  onTitle(event: any) {
    this.titleInputValue = event.target.value
  }

  onText(event: any) {
    this.textInputValue = event.target.value
  }

  onAvatar(event: any) {
    this.avatarURLInputValue = event.target.value
  }

  addNewPost(titleValue: string, textValue: string, avatarURLValue: string ) {
    const value = {
      title: titleValue,
      text: textValue,
      avatarURL: avatarURLValue,
  }
 
    this.onPost.emit(value)
    this.titleInputValue = '';
    this.textInputValue = '';
    this.avatarURLInputValue = '';
}

}
