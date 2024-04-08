import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineeditformComponent } from './medicineeditform.component';

describe('MedicineeditformComponent', () => {
  let component: MedicineeditformComponent;
  let fixture: ComponentFixture<MedicineeditformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicineeditformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicineeditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
