import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedlistComponent } from './medlist.component';

describe('MedlistComponent', () => {
  let component: MedlistComponent;
  let fixture: ComponentFixture<MedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
