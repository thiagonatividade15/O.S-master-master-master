import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOSComponent } from './form-os.component';

describe('FormOSComponent', () => {
  let component: FormOSComponent;
  let fixture: ComponentFixture<FormOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
