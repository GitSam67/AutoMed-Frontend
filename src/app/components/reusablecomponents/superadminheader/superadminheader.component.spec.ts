import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminheaderComponent } from './superadminheader.component';

describe('SuperadminheaderComponent', () => {
  let component: SuperadminheaderComponent;
  let fixture: ComponentFixture<SuperadminheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
