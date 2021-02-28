import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoingnageComponent } from './temoingnage.component';

describe('TemoingnageComponent', () => {
  let component: TemoingnageComponent;
  let fixture: ComponentFixture<TemoingnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemoingnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoingnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
