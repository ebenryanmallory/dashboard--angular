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

  displayDashboard(emit: any) {
    document.querySelectorAll('.active').forEach(active => active.classList.remove('active'));
    emit.target.parentNode.classList.add('active');
    document.querySelectorAll('.content-wrapper').forEach(wrapper => wrapper.classList.remove('hidden'));
  }
  displayTodos(emit: any) {
    document.querySelectorAll('.active').forEach(active => active.classList.remove('active'));
    emit.target.parentNode.classList.add('active');
    document.querySelectorAll('.content-wrapper').forEach(wrapper => wrapper.classList.add('hidden'));
    document.querySelectorAll('#todos').forEach(todos => todos.classList.remove('hidden'));
  }
  displayMovies(emit: any) {
    document.querySelectorAll('.active').forEach(active => active.classList.remove('active'));
    emit.target.parentNode.classList.add('active');
    document.querySelectorAll('.content-wrapper').forEach(wrapper => wrapper.classList.add('hidden'));
    document.querySelectorAll('#movies').forEach(movies => movies.classList.remove('hidden'));
  }
  displayNews(emit: any) {
    document.querySelectorAll('.active').forEach(active => active.classList.remove('active'));
    emit.target.parentNode.classList.add('active');
    document.querySelectorAll('.content-wrapper').forEach(wrapper => wrapper.classList.add('hidden'));
    document.querySelectorAll('#news').forEach(news => news.classList.remove('hidden'));
  }

  ngOnInit(): void {
  }

}
