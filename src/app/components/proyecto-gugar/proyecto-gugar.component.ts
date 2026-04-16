import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { businessOutline, rocketOutline, layersOutline, checkmarkCircle, checkmarkCircleOutline } from 'ionicons/icons';
import { IonIcon, IonChip } from '@ionic/angular/standalone';
@Component({
  selector: 'app-proyecto-gugar',
  templateUrl: './proyecto-gugar.component.html',
  styleUrls: ['./proyecto-gugar.component.scss'],standalone: true,
  imports: [IonIcon, IonChip]
})
export class ProyectoGugarComponent {
  public imagenes: string[] = [
    'assets/g22.jpeg',
    'assets/g21.jpeg',
    'assets/g20.jpeg',
    'assets/g19.jpeg',
    'assets/g18.jpeg',
    'assets/g17.jpeg',
    'assets/g16.jpeg',
    'assets/g15.jpeg',
    'assets/g14.jpeg',
  ];

  public logros: string[] = [
    'Desarrollo de módulos para la gestión de rutas, utilizando geolocalización, mapas interactivos.',
    'Optimización de la interfaz de usuario siguiendo los lineamientos de marca Gugar.',
    'Integración de servicios para la sincronización de datos en tiempo real.',
    'Mejora en el rendimiento de la aplicación mediante carga perezosa (Lazy Loading).',
    'Perfiles de usuario con diferentes niveles de acceso y actividades.',
    'Seguimiento en tiempo real en las actividades de reparto y entrega.'
  ];

  constructor() {
    addIcons({businessOutline,rocketOutline,checkmarkCircleOutline,checkmarkCircle,layersOutline});
  }

  onWheel(event: WheelEvent, container: HTMLElement) {
  // 📍 Detectamos si el movimiento es principalmente VERTICAL
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    // Si es vertical, NO hacemos preventDefault() 
    // Esto permite que la página principal se mueva libremente.
    return; 
  }

  // Si el usuario intenta hacer scroll HORIZONTAL (con shift o trackpad)
  // ahí sí movemos el contenedor.
  if (event.deltaX !== 0) {
    event.preventDefault();
    container.scrollLeft += event.deltaX;
  }
}
}