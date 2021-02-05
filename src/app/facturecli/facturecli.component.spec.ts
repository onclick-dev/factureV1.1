import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturecliComponent } from './facturecli.component';

describe('FacturecliComponent', () => {
  let component: FacturecliComponent;
  let fixture: ComponentFixture<FacturecliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturecliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturecliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
