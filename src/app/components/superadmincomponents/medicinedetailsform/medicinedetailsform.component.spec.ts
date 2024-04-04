import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinedetailsformComponent } from './medicinedetailsform.component';

describe('MedicinedetailsformComponent', () => {
  let component: MedicinedetailsformComponent;
  let fixture: ComponentFixture<MedicinedetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicinedetailsformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicinedetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
