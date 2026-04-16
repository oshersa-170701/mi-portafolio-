import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProyectoFiscaliaComponent } from './proyecto-fiscalia.component';

describe('ProyectoFiscaliaComponent', () => {
  let component: ProyectoFiscaliaComponent;
  let fixture: ComponentFixture<ProyectoFiscaliaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoFiscaliaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectoFiscaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
