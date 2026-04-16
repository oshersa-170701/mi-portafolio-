import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { PerfilUsuarioComponent } from '../components/perfil-usuario/perfil-usuario.component';
import { ProyectoUtvcoComponent } from "../components/proyecto-utvco/proyecto-utvco.component";
import { ProyectoFiscaliaComponent } from "../components/proyecto-fiscalia/proyecto-fiscalia.component";
import { ProyectoAnaasisComponent } from "../components/proyecto-anaasis/proyecto-anaasis.component";
import { ProyectoGugarComponent } from "../components/proyecto-gugar/proyecto-gugar.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // Asegúrate de que tenga esto
  imports: [IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, PerfilUsuarioComponent, ProyectoUtvcoComponent, ProyectoFiscaliaComponent, ProyectoAnaasisComponent, ProyectoGugarComponent] 
})
export class HomePage {
  constructor() {}
}
