import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhwalformComponent } from './ahwalform.component';

describe('AhwalformComponent', () => {
  let component: AhwalformComponent;
  let fixture: ComponentFixture<AhwalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AhwalformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AhwalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
