import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { UploadService } from "./upload.service";

@Injectable({
  providedIn: 'root'
})

export class UsersGuard implements CanActivate {
  constructor(private router: Router, private uploadService: UploadService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if(this.uploadService.token == null){
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
