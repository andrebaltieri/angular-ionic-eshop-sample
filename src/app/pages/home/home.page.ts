import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CartUtil } from 'src/app/utils/cart.util';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products: any[];

  constructor(
    private service: DataService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(
        (res: any) => {
          this.products = res;
        }
      );
  }

  addToCart(product) {
    CartUtil.add(product);
    this.showMessage("Produto adicionado ao carrinho!");
  }

  isInCart(product): boolean {
    return CartUtil.isInCart(product);
  }

  removeFromCart(product) {
    CartUtil.remove(product);
    this.showMessage("Produto removido do carrinho!");
  }

  async showMessage(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      closeButtonText: "Fechar",
      duration: 3000,
      showCloseButton: true
    });
    toast.present();
  }
}
