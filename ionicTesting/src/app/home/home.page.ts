import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todo  = { user: '', pass: ''};
  todo2 = { user: '', pass: ''};
  constructor(private login: LoginService) {}
  form1(){
    if(this.todo.user === '' || this.todo.pass === ''){
      alert('campos vazios');
    }else{
      this.login.loginSeg(this.todo.user, this.todo.pass)
      .then((ret)=>{
          console.log(ret);
        }).catch((err)=>{
            console.log(err);
        });
    }
  }
  form2(){
    if(this.todo2.pass === '' || this.todo2.pass === ''){
      alert('campos vazios 2');
    }else{
        this.login.loginInSeg(this.todo2.user, this.todo2.pass)
        .then((ret)=>{
          console.log(ret);
        }).catch((err)=>{
            console.log(err);
        });
    }
  }
}
