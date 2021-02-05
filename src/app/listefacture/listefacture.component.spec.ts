import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefactureComponent } from './listefacture.component';

describe('ListefactureComponent', () => {
  let component: ListefactureComponent;
  let fixture: ComponentFixture<ListefactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
