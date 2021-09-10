import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  alertd = false;
  users: any
  validEmail = false;
  code: any;
  email: any;
  password: any;

  emailUser(event: any){
    this.email = event.target.value;
  }

  constructor(private firestore: AngularFirestore) {}

  emailValidation(){
    this.users.forEach((user: any) => {
      if (this.email == user.email){
        this.validEmail = true;
        this.password = user.password;
      }
    })
    if (!this.validEmail){
      this.alertd = true;
    }
  }

  ngOnInit(): void {
    this.firestore.collection('users').valueChanges()
      .subscribe(value => this.users = value);
  }

}
