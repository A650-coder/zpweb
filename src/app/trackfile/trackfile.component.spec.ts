import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackfileComponent } from './trackfile.component';

describe('TrackfileComponent', () => {
  let component: TrackfileComponent;
  let fixture: ComponentFixture<TrackfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
