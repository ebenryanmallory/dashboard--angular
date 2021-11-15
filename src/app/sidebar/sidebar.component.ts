import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {}

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
