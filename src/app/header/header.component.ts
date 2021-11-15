import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  // @ViewChild('profileContent') profileContent: ElementRef;

  constructor(public auth: AngularFireAuth) {}

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
  toggleProfile(emit: any) {
    document.querySelectorAll('.profile-content').forEach(content => content.classList.toggle('hidden'));
  }
  ngAfterViewInit(){
    // this.profileContent.nativeElement.value = 'Whale!';
  }

}
