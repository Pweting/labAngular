import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageVinComponent } from './affichage-vin.component';

describe('AffichageVinComponent', () => {
  let component: AffichageVinComponent;
  let fixture: ComponentFixture<AffichageVinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageVinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
