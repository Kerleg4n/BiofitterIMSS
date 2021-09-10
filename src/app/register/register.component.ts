import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  alerts = false;
  alertd = false;
  route = '/register';
  user: any;
  fullName: any;
  email: any;
  password: any;
  confirmationPassword: any;
  affiliation: any;

  fullNameUser(event: any){
    this.fullName = event.target.value;
  }

  emailUser(event: any){
    this.email = event.target.value;
  }

  passwordUser(event: any){
    this.password = event.target.value;
  }

  confirmationPasswordUser(event: any){
    this.confirmationPassword = event.target.value;
  }

  affiliationUser(event: any){
    this.affiliation = event.target.value;
  }

  newUser(){
    if( this.fullName != '' && this.email != '' && this.password != '' && this.confirmationPassword != '' && this.affiliation != '' ){
      if( this.password == this.confirmationPassword  ){
        this.user = {
          name: this.fullName,
          email: this.email,
          password: this.password,
          affiliation: this.affiliation
        }
        this.addUser(this.user);
        this.alerts = true;
      }
      if(this.password != this.confirmationPassword){
        this.alertd = true;
      }
    }
  }

  constructor(private firestore: AngularFirestore, public http: HttpClient) { }

  addUser(user: any) {
    this.firestore.collection('users').doc(this.user.email + this.user.password).set(user);
    this.sendEmail();
  }

  sendEmail(){

  }

  ngOnInit(): void {
  }

}
