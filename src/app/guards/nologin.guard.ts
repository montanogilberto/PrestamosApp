import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor(private angularFireAuth: AngularFireAuth,  private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //console.log(auth);
    return this.angularFireAuth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        return true
      } else {
        this.router.navigate(['/folder/inicio']); 
        return false
      }

    }))
  }
  
}
