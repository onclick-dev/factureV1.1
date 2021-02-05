import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhonoraireComponent } from './addhonoraire.component';

describe('AddhonoraireComponent', () => {
  let component: AddhonoraireComponent;
  let fixture: ComponentFixture<AddhonoraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhonoraireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhonoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
