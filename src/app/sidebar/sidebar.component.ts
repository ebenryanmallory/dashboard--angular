import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;
  todosArray: Todo[] = [];

  constructor(firestore: AngularFirestore) {
    this.todosCollection = firestore.collection<Todo>('todos');
    this.todos = this.todosCollection.valueChanges();
    this.todos.subscribe(content => this.todosArray = content);
  }

  drop(event: CdkDragDrop<Todo[]>): void {
    moveItemInArray(this.todosArray, event.previousIndex, event.currentIndex);
  }
  addItem(todo: Todo) {
    this.todosCollection.add(todo);
  }

  ngOnInit(): void {
  }

}
