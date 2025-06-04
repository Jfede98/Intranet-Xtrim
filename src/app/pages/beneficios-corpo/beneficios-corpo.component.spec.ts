import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosCorpoComponent } from './beneficios-corpo.component';

describe('BeneficiosCorpoComponent', () => {
  let component: BeneficiosCorpoComponent;
  let fixture: ComponentFixture<BeneficiosCorpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosCorpoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosCorpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
