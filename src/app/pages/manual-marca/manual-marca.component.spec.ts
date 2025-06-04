import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualMarcaComponent } from './manual-marca.component';

describe('ManualMarcaComponent', () => {
  let component: ManualMarcaComponent;
  let fixture: ComponentFixture<ManualMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualMarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
