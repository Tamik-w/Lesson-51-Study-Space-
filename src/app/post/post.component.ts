import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {

  @Input() title = '';
  @Input() text = '';
  @Input() avatarURL = '';
  @Input() charsetAmount = 0;
  @Output() removeUser = new EventEmitter<void>();

  onRemoveUser() {
    this.removeUser.emit();
  }
}
