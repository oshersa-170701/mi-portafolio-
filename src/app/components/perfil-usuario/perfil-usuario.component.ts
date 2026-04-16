import { Component } from '@angular/core';
import { IonAvatar, IonText, IonIcon, IonButton } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { logoGithub, logoLinkedin, logoTwitter, locationOutline, mailOutline } from 'ionicons/icons';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
  imports: [IonButton, IonIcon, IonAvatar, IonText],
})
export class PerfilUsuarioComponent {
  public usuario = {
    nombre: 'Oswaldo Hernández Sabah',
    puesto: 'Ing. en Desarrollo y Gestión de Software ',
    ubicacion: 'Oaxaca, México',
    correo: 'oshersa1771@gmail.com',
    redes: [
      { nombre: 'GitHub', url: 'https://github.com/oshersa-170701', icon: 'logo-github' },
      { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/oswaldo-hernández-sabah-5856ba368/', icon: 'logo-linkedin' },

    ]
  };
  constructor() {
    addIcons({
      'logo-github': logoGithub,
      'logo-linkedin': logoLinkedin,
      'logo-twitter': logoTwitter,
      'location-outline': locationOutline,
      'mail-outline': mailOutline
    });

  }
}
