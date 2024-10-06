import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnInputComponent } from './fn-input.component';

describe('FnInputComponent', () => {
  let component: FnInputComponent;
  let fixture: ComponentFixture<FnInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FnInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
