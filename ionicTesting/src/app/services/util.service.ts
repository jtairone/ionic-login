import { Injectable } from '@angular/core';
import * as Crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  dataForm: any;
  encryptData: any;
  decryptData: any;
  secret = 'Teste123';
  bytes: any;
  constructor() { }

encrypt(u, p) {
  this.dataForm = {user: u, pass: p};
  this.encryptData = Crypto.AES.encrypt(JSON.stringify(this.dataForm), this.secret).toString();
  return this.encryptData;
 }
decrypt(data){
       this.bytes = Crypto.AES.decrypt(data, this.secret);
       this.decryptData = JSON.parse(this.bytes.toString(Crypto.enc.Utf8));
       return this.decryptData;
}

}
