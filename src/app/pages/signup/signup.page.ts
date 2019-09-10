import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private service: DataService,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.minLength(6)],
      email: ['', Validators.minLength(6)],
      username: ['', Validators.minLength(6)],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit() {
  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: 'Criando...' });
    loading.present();

    this
      .service
      .createCustomer(this.form.value)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess();
        },
        (err: any) => {
          loading.dismiss();
          console.log(err);
          this.showError("Falha ao cadastrar");
        }
      );
  }

  async showError(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Fechar',
    });
    toast.present();
  }

  async showSuccess() {
    const alert = await this.alertCtrl.create({
      message: 'Bem-vindo ao meu eShop!',
      buttons: [{
        text: 'Continuar',
        handler: () => {
          this.navCtrl.navigateRoot('/login');
        }
      }]
    });

    await alert.present();
  }
}
