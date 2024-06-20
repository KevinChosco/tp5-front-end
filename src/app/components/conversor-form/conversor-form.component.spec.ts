import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorFormComponent } from './conversor-form.component';

describe('ConversorFormComponent', () => {
  let component: ConversorFormComponent;
  let fixture: ComponentFixture<ConversorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
