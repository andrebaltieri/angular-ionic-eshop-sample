import { Component, OnInit } from '@angular/core';
import { UserUtil } from 'src/app/utils/user.util';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  logout() {
    UserUtil.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
