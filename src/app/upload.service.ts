import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  token: any;
  selectedFile = null;

  constructor() { }

  storeToken(token: any){
    this.token = token;
  }
}
