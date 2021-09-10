import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { UploadService } from "../upload.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  alert = false;
  users: any;
  route = '/login';
  email: any;
  password: any;

  emailUser(event: any){
    this.email = event.target.value;
  }

  passwordUser(event: any){
    this.password = event.target.value;
  }

  userValidation(){
    if ( (this.email == '') || (this.password == '')) {
      this.route = '/login';
    }
    if (this.email != '' && this.password != '') {
      this.readUsers()
      this.uploadService.storeToken(this.email + this.password);
    }
  }

  constructor(private firestore: AngularFirestore, private uploadService: UploadService) {
    this.firestore.collection('users').valueChanges()
      .subscribe(value => this.users = value);
  }

  readUsers() {
    this.users.forEach((user: any) => {
      if (this.email == user.email && this.password == user.password){
        this.route = '/sidenav';
      }
    })
    if (this.route == '/login'){
      this.alert = true;
    }
  }

  ngOnInit(): void {
  }

}
