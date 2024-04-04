import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreownerheaderComponent } from './storeownerheader.component';

describe('StoreownerheaderComponent', () => {
  let component: StoreownerheaderComponent;
  let fixture: ComponentFixture<StoreownerheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreownerheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreownerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
