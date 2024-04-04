import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchdetailsComponent } from './branchdetails.component';

describe('BranchdetailsComponent', () => {
  let component: BranchdetailsComponent;
  let fixture: ComponentFixture<BranchdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
