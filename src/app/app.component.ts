import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  vv = 15;
 posts = [
   {
     title : 'Post 1',
     content : "Je suis le premier post du blog",
     loveIts : 33,
     createdAt : new Date()
   },
   {
    title : 'Post 2',
    content : "Je suis le deuxieme post du blog",
    loveIts : 3,
    createdAt : new Date()
  },
  {
    title : 'Post 3',
    content : "Je suis le troisieme post du blog",
    loveIts : 0,
    createdAt : new Date()
  },
 ]
}
