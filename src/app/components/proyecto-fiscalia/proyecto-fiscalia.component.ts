import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { shieldCheckmarkOutline, lockClosedOutline, chevronForwardCircleOutline, checkmarkCircleOutline, rocketOutline } from 'ionicons/icons';
import { IonIcon, IonChip } from '@ionic/angular/standalone';
@Component({
  selector: 'app-proyecto-fiscalia',
  templateUrl: './proyecto-fiscalia.component.html',
  styleUrls: ['./proyecto-fiscalia.component.scss'],
standalone: true,
  imports: [IonIcon, IonChip]
})
export class ProyectoFiscaliaComponent {
  public logros: string[] = [
    'Homicidios Dolosos.',
    'Narco Mantas.',
    'Cateos.',
    'Detenidos.'
  ];
  public obj: string[] = [
    'CRUD de todos los módulos.',
    'Interelación entre módulos.',
    'Guardado de imágenes con seguridad.',
    'Implementación de protocolos de seguridad.',
    'Utiliacion de JWT para autenticación y autorización.',
    'Despliegue en servidor del CIC.',
    'Implementación de mapa interactivo para geolocalización de domicilios o localidades.'
  ];

  constructor() {
    addIcons({shieldCheckmarkOutline,rocketOutline,chevronForwardCircleOutline,checkmarkCircleOutline,lockClosedOutline});
  }
}