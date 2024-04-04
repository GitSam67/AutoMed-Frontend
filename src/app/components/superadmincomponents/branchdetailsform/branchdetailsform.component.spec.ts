import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchdetailsformComponent } from './branchdetailsform.component';

describe('BranchdetailsformComponent', () => {
  let component: BranchdetailsformComponent;
  let fixture: ComponentFixture<BranchdetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchdetailsformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
