import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { CartUtil } from 'src/app/utils/cart.util';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public product: any;

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    let tag = this.route.snapshot.paramMap.get('product');
    this
      .service
      .getProduct(tag)
      .subscribe(
        (res: any) => this.product = res
      );
  }

  addToCart() {
    CartUtil.add(this.product);
    this.navCtrl.navigateRoot('/');
  }
}
