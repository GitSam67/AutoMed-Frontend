import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreownerformComponent } from './storeownerform.component';

describe('StoreownerformComponent', () => {
  let component: StoreownerformComponent;
  let fixture: ComponentFixture<StoreownerformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreownerformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreownerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
