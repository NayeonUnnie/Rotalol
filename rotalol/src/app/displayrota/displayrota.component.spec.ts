import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayrotaComponent } from './displayrota.component';

describe('DisplayrotaComponent', () => {
  let component: DisplayrotaComponent;
  let fixture: ComponentFixture<DisplayrotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayrotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
