import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  todos: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.todos = firestore.collection('todo').valueChanges();
  }
}
