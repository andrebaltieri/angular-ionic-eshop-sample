import { Component, OnInit } from '@angular/core';
import { UserUtil } from 'src/app/utils/user.util';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public user: any;

  constructor() { }

  ngOnInit() {
    this.user = UserUtil.get();
  }

}
