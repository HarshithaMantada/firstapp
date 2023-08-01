import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  users:any;
  abcHttp: any;
  constructor(private abc:HttpClient){}

  ngOnInit(){
    let res=this.abcHttp.get("https://jsonplaceholder.typicode.com/users");
    res.suscribe(
      (      resData: any) => this.users=resData
    );
     
  }
}
