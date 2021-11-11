import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  encrypt: any;
  constructor(public http: HttpClient, private utilService: UtilService) { }

  loginSeg(u, p){
    const url = 'http://localhost:8000/loginProtegido';
    //cryptografando usando AES e com uma senha secreta somente com ele quebra a cryptografia
    this.encrypt = this.utilService.encrypt(u, p);
    const body = { hash: this.encrypt };
    const hearder = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, body, { headers: hearder }).toPromise();
  }
  loginInSeg(u, p){
    const url = 'http://localhost:8000/loginInseguro';
    //cryptografando usando AES e com uma senha secreta somente com ele quebra a cryptografia
    const body = { user: u, pass: p };
    const hearder = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, body, { headers: hearder }).toPromise();
  }

}
