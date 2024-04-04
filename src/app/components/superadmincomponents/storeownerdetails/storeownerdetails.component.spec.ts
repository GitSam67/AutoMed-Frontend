import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreownerComponent } from './storeownerdetails.component';

describe('StoreownerComponent', () => {
  let component: StoreownerComponent;
  let fixture: ComponentFixture<StoreownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreownerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
