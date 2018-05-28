import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLibComponent } from './img-lib.component';

describe('ImgLibComponent', () => {
  let component: ImgLibComponent;
  let fixture: ComponentFixture<ImgLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
