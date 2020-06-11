import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomicilioService } from "../../services/domicilio.service";
import { LoadingController } from '@ionic/angular';
import { DomiciliosI } from "../../models/task.interface";

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.page.html',
  styleUrls: ['./domicilios.page.scss'],
})
export class DomiciliosPage implements OnInit {

  clienteId = null;
  domicilios: DomiciliosI[];

  constructor(
    private route: ActivatedRoute,
    private domicilioService: DomicilioService,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.clienteId = this.route.snapshot.params['id'];
    console.log(this.clienteId);
    if (this.clienteId) {
      this.loadCliente();
    }

  }

  async loadCliente() {
    const loading = await this.loadingController.create({
      message: 'Cargando....'
    });
    await loading.present();

    this.domicilioService.getDomicilios(this.clienteId).subscribe(domicilios => {
      loading.dismiss();
      this.domicilios = domicilios;
      console.log('domicilios',this.domicilios);
    });
  }

}
