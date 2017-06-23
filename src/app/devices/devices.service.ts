import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DevicesService {

  devices: FirebaseListObservable<any[]> = null;

  constructor(private db: AngularFireDatabase) { }

  getDevicesList() {
    this.devices = this.db.list('devices');
    return this.devices;
  }

}
