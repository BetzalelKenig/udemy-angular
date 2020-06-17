import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: {name: string, status: string}[] = [];

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.usersservice.users.forEach(e => {
      if (e.status === 'inactive') { this.users.push(e); }
    });
  }

  onSetToActive(id: number, status: string) {
    this.usersservice.setStatus(id, status);
  }
}
