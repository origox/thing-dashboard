import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DevicesService {

  devices: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  // TODO refactor to plain observable to avoid pollution
  getDevicesList(): FirebaseListObservable<any[]>  {
    this.devices = this.db.list('devices');
    return this.devices;
  }

}
