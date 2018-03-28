import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'page-acelerometro',
  templateUrl: 'acelerometro.html',
  providers: [DeviceMotion]
})
export class AcelerometroPage {
  private subscription: any;
  private acelerometro:any = {
  x:0,
  y:0,
  z:0,
  timestamp: null
  }
    
  constructor(public navCtrl: NavController,  public loadingCtrl:NavParams, public deviceMotion:DeviceMotion) {
     this.acelerometro.x = 0;
     this.acelerometro.y = 0;
     this.acelerometro.z = 0;
  
   
  }

  ionViewDidLoad(){
    var options = {
      frequency: 1000
  };
  this.subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
    this.acelerometro = acceleration;
});  
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }  
}
