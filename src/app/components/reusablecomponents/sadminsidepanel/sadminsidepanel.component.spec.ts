import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadminsidepanelComponent } from './sadminsidepanel.component';

describe('SadminsidepanelComponent', () => {
  let component: SadminsidepanelComponent;
  let fixture: ComponentFixture<SadminsidepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadminsidepanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SadminsidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
