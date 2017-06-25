import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {


  devices: FirebaseListObservable<any[]>;

  constructor(private deviceService: DevicesService) { }

  ngOnInit() {
    this.devices = this.deviceService.getDevicesList();
  }

  onActuatorEvent(key: any, value: number) {
    console.log(`onActuatorEvent - ${key}`);

    //this.deviceService.updateDevice(this.devices , { 'myled1.properites.state' : 0});
    //
  //  const ref = key.$ref.ref;

   // console.log(`ref: ${ref}`);

   // this.devices.update(ref.child('properties'), { state : 1});

  this.devices.update( key,  { 'properties' : { 'time' : Date(), 'state' : value} } );




  }

}
