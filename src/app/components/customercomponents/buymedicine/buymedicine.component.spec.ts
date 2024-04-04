import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuymedicineComponent } from './buymedicine.component';

describe('BuymedicineComponent', () => {
  let component: BuymedicineComponent;
  let fixture: ComponentFixture<BuymedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuymedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuymedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
