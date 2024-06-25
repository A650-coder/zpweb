import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddashComponent } from './hoddash.component';

describe('HoddashComponent', () => {
  let component: HoddashComponent;
  let fixture: ComponentFixture<HoddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoddashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
