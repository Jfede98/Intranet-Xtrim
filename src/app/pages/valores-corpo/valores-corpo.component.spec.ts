import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresCorpoComponent } from './valores-corpo.component';

describe('ValoresCorpoComponent', () => {
  let component: ValoresCorpoComponent;
  let fixture: ComponentFixture<ValoresCorpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoresCorpoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoresCorpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
