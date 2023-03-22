import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  title: string = 'NVIDIA VRWorks Graphics';
  text: string = 'VRWorks™ is a comprehensive suite of APIs, libraries, and engines that enable application and headset developers to create amazing virtual reality experiences. VRWorks enables a new level of presence by bringing physically realistic visuals, sound, touch interactions, and simulated environments to virtual reality.';
}
