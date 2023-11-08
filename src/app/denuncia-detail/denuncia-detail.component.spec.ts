import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaDetailComponent } from './denuncia-detail.component';

describe('DenunciaDetailComponent', () => {
  let component: DenunciaDetailComponent;
  let fixture: ComponentFixture<DenunciaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DenunciaDetailComponent]
    });
    fixture = TestBed.createComponent(DenunciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
