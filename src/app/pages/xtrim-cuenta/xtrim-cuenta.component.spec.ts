import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtrimCuentaComponent } from './xtrim-cuenta.component';

describe('XtrimCuentaComponent', () => {
  let component: XtrimCuentaComponent;
  let fixture: ComponentFixture<XtrimCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XtrimCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XtrimCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
