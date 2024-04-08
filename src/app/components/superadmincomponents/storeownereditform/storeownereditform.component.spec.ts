import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreownereditformComponent } from './storeownereditform.component';

describe('StoreownereditformComponent', () => {
  let component: StoreownereditformComponent;
  let fixture: ComponentFixture<StoreownereditformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreownereditformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreownereditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
