import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaAddComponent } from './denuncia-add.component';

describe('DenunciaAddComponent', () => {
  let component: DenunciaAddComponent;
  let fixture: ComponentFixture<DenunciaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenunciaAddComponent]
    });
    fixture = TestBed.createComponent(DenunciaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
