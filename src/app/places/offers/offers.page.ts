import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../../shared/login/login.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.modalCtrl.create({
      component: LoginComponent
    }).then(modal => {
      modal.present();
    });
  }

  ionViewWillEnter() {
    this.placesService.hideTabBar = false;
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    this.placesService.hideTabBar = true;
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
}
