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


}
