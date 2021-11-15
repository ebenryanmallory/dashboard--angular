import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  userData: any;

  private todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;
  todosArray: Todo[] = [];

  constructor(private readonly firestore: AngularFirestore, public auth: AngularFireAuth) {
    this.todosCollection = firestore.collection<Todo>('todos');
    this.todos = this.todosCollection.valueChanges();
    this.todos.subscribe(content => this.todosArray = content);
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.todosCollection = this.firestore.collection('users').doc(this.userData.uid).collection<Todo>('todos');
        this.todos = this.todosCollection.valueChanges();
        this.todos.subscribe(content => this.todosArray = content);
      }
    })
  }
  drop(event: CdkDragDrop<Todo[]>): void {
    moveItemInArray(this.todosArray, event.previousIndex, event.currentIndex);
  }
  updateTask(emit: any, id: string) {
    let todo = {
      description: emit.target.value,
      id: id,
      checked: emit.target.previousSibling.classList.contains('mat-checkbox-checked')
    };
    if (this.auth.user) {
      this.firestore.collection('users').doc(this.userData.uid).collection('todos').doc(id).update(todo);
    }
  }
  updateTodos() {
    this.todosArray.map((todo: Todo) => {
      console.log(todo)
      const id = todo.id;
      this.firestore.collection('users').doc(this.userData.uid).collection('todos').doc(id).set(todo);
    });
  }
  addItem(description: string, checked: boolean) {
    const id = this.firestore.createId();
    const order = this.todosArray.length + 1;
    const todo: Todo = { id, description, checked, order };
    if (this.auth.user) {
      this.firestore.collection('users').doc(this.userData.uid).collection('todos').doc(id).set(todo);
    } else {
      if (document.querySelectorAll('.mat-checkbox-label').length > 5) { return };
      this.todosCollection.doc(id).set(todo);
    }
  }
  async login() {
    const result = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    await this.SetUserData(result.user);
    this.updateTodos();
    this.todosCollection = this.firestore.collection('users').doc(this.userData.uid).collection<Todo>('todos');
    this.todos = this.todosCollection.valueChanges();
    this.todos.subscribe(content => this.todosArray = content);
  }
  logout() {
    this.todosCollection = this.firestore.collection<Todo>('todos');
    this.todos = this.todosCollection.valueChanges();
    this.todos.subscribe(content => this.todosArray = content);
    this.auth.signOut();
  }
  SetUserData(user:any) {
    this.userData = user;
    const userRoot: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRoot.set(userData, {
      merge: true
    })
  }

  ngOnInit(): void {}

}
