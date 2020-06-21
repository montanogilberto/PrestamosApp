import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public userEmail: string = localStorage.getItem("userEmail");

  constructor(
      private activatedRoute: ActivatedRoute,
      public authService: AuthService
      ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  test(){
    console.log("entro");
  }

  Onlogout(){
    //console.log('entro Onlogout');
    this.authService.logout();
  }

}
