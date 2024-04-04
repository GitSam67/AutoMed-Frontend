import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreownersidepanelComponent } from './storeownersidepanel.component';

describe('StoreownersidepanelComponent', () => {
  let component: StoreownersidepanelComponent;
  let fixture: ComponentFixture<StoreownersidepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreownersidepanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreownersidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
