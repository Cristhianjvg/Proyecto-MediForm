import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrCiudadComponent } from './pr-ciudad.component';

describe('PrCiudadComponent', () => {
  let component: PrCiudadComponent;
  let fixture: ComponentFixture<PrCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
