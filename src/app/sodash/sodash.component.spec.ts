import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOdashComponent } from './sodash.component';

describe('SOdashComponent', () => {
  let component: SOdashComponent;
  let fixture: ComponentFixture<SOdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SOdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SOdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
