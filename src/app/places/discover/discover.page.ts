import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[] = [];
  featuredPlace: Place;
  featuredIndex = 0;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  searchbarWrapperBackground = { background: 'rgba(var(--ion-color-dark-rgb), 0)' };

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.featuredPlace = this.loadedPlaces[this.featuredIndex];
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

  onScroll(event: CustomEvent) {
    let ratio = event.detail.scrollTop / 150;
    console.log(ratio);
    if (ratio < 0) {
      return;
    } else if (ratio > 1) {
      ratio = 1;
    }
    // console.log('rgba(var(--ion-color-dark-rgb), ' + ratio + ')');
    this.searchbarWrapperBackground.background = 'rgba(var(--ion-color-dark-rgb), ' + ratio + ')';
  }

  loadData(event) {
    setTimeout(() => {
      this.loadedPlaces.push(...this.placesService.places);
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.loadedPlaces.length >= 50) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.featuredIndex = (this.featuredIndex + 1) % 5;
      this.featuredPlace = this.loadedPlaces[this.featuredIndex];
      event.target.complete();
    }, 1000);
  }

  onRefreshPull(event) {
    console.log(event);
  }

  onRefreshStart(event) {
    console.log('start');
  }

}
