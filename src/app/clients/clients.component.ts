import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = [];
  constructor(private userService:UserserviceService){}

  listUsers() {
    this.userService.getUsers()
      .subscribe(
        data => {
          this.clients = data
        }
      )
  }

  ngOnInit() {
  
  this.listUsers()
  
  }

}
