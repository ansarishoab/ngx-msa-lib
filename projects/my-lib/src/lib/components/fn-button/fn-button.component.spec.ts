import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnButtonComponent } from './fn-button.component';

describe('FnButtonComponent', () => {
  let component: FnButtonComponent;
  let fixture: ComponentFixture<FnButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FnButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
