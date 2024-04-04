import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerformComponent } from './customerform.component';

describe('CustomerformComponent', () => {
  let component: CustomerformComponent;
  let fixture: ComponentFixture<CustomerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
