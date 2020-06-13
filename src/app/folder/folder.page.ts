import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController} from '@ionic/angular';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      public authService: AuthService
      ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.folder)
  }

  test(){
    console.log("entro");
  }

  Onlogout(){
    //console.log('entro Onlogout');
    this.authService.logout();
  }

}
