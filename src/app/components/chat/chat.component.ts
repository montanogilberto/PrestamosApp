import { Component, OnInit } from '@angular/core';
import { NavParams } from "@ionic/angular";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

public name: string;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.name = this.navParams.get('name');
  }

}
