import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedetailsComponent } from './medicinedetails.component';

describe('MedicinedetailsComponent', () => {
  let component: MedicinedetailsComponent;
  let fixture: ComponentFixture<MedicinedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicinedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
