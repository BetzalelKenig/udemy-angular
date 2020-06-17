import { Component, OnInit, OnChanges,} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, OnChanges {
  users: {name: string, status: string}[] = [];

  constructor(private usersservice: UsersService) {}

  ngOnInit() {
    this.usersservice.users.forEach(e => {
      if (e.status === 'active') { this.users.push(e); }
    });
  }

  ngOnChanges() {
    this.users = [];
    this.usersservice.users.forEach(e => {
      if (e.status === 'active') { this.users.push(e); }
    });
  }

  onSetToInactive(id: number, status: string) {
    this.usersservice.setStatus(id, status);
    console.log(this.users[0].status);
  }

}
