import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@Component({

  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  coords:any;
  accuracy:any;
  error:any;
  constructor(private geolocation:Geolocation) {
      
  }

  watch(){
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.coords = resp.coords.latitude + ',' + resp.coords.longitude;
      this.accuracy = resp.coords.accuracy + ' meters';
      console.log(this.coords)
    }).catch((error)=>{
      this.error = 'Error getting location' + error;
    })

  }





}
