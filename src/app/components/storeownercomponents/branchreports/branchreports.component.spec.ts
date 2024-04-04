import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchreportsComponent } from './branchreports.component';

describe('BranchreportsComponent', () => {
  let component: BranchreportsComponent;
  let fixture: ComponentFixture<BranchreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchreportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
