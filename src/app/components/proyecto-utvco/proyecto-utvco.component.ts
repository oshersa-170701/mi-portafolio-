import { Component} from '@angular/core';
import { addIcons } from 'ionicons';
import { schoolOutline, imageOutline, checkmarkCircleOutline, lockClosedOutline } from 'ionicons/icons';
import { IonIcon, IonChip } from '@ionic/angular/standalone';
@Component({
  selector: 'app-proyecto-utvco',
  templateUrl: './proyecto-utvco.component.html',
  styleUrls: ['./proyecto-utvco.component.scss'],
  standalone: true,
  imports: [IonIcon, IonChip]
})
export class ProyectoUtvcoComponent   {

  public imagenes: string[] = [
    'assets/utvco-1.jpeg',
    'assets/utvco-2.jpeg',
    'assets/utvco-3.jpeg',
    'assets/utvco-4.jpeg',
    'assets/utvco-5.jpeg',
    'assets/utvco1.jpeg',
    'assets/utvco2.jpeg',
    'assets/utvco6.jpeg',
  ];
  public indiceActivo: number = 0;
  private intervalId: any;
  // Lista de logros para mostrar con @if
  public logros: string[] = [
    'Automatización del registro para actividades culturales y deportivas.',
    'Gestión eficiente de tutorías grupales o generales con roles de docente y alumno.',
    'Generación de reportes de alumnos inscritos en alguna tutoría.',
    'Implementación del proyecto en el servidor de la universidad para su uso dentro de la institución.'
  ];

  constructor() {
    addIcons({schoolOutline,lockClosedOutline,checkmarkCircleOutline,imageOutline});
  }

public indicePagina: number = 0;
public imagenesVisibles: string[] = [];

ngOnInit() {
  this.actualizarImagenesVisibles();
  setInterval(() => {
    this.siguientePagina();
  }, 4000);
}

actualizarImagenesVisibles() {
  // 📍 Tomamos bloques de 4 imágenes para que no se amontonen
  const inicio = this.indicePagina * 4;
  this.imagenesVisibles = this.imagenes.slice(inicio, inicio + 4);
}

siguientePagina() {
  const totalPaginas = Math.ceil(this.imagenes.length / 4);
  this.indicePagina = (this.indicePagina + 1) % totalPaginas;
  this.actualizarImagenesVisibles();
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
}
