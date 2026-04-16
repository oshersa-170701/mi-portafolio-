import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { gitBranchOutline, peopleOutline, codeWorkingOutline, checkmarkCircleOutline, logoAndroid } from 'ionicons/icons';
import { IonIcon, IonChip } from '@ionic/angular/standalone';
@Component({
  selector: 'app-proyecto-anaasis',
  templateUrl: './proyecto-anaasis.component.html',
  styleUrls: ['./proyecto-anaasis.component.scss'],
standalone: true,
  imports: [IonIcon, IonChip]
})
export class ProyectoAnaasisComponent {
  public logros: string[] = [
    'Refactorización del código base para mejorar la mantenibilidad y escalabilidad.',
    'Optimización de consultas y consumo de APIs para reducir tiempos de carga.',
    'Implementación de nuevas funcionalidades solicitadas por los usuarios finales.',
    'Colaboración activa en la reconstrucción de módulos críticos del sistema.',
    'Utilización de geolocalización la cual mejora la busqueda de hospitales y medicos cercanos.',
  ];

  constructor() {
    addIcons({logoAndroid,peopleOutline,checkmarkCircleOutline,gitBranchOutline,codeWorkingOutline,});
  }
  // Función para manejar el scroll con la rueda del mouse sin usar Shift
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
  public imagenes: string[] = [
    'assets/ana1.jpeg',
    'assets/ana3.jpeg',
    'assets/ana4.jpeg',
    'assets/ana5.jpeg',
    'assets/ana6.jpeg',
    'assets/ana7.jpeg',
    'assets/ana8.jpeg',
    'assets/ana10.jpeg',
  ];
}