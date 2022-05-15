import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormUserComponent } from './add-form-user.component';

describe('AddFormUserComponent', () => {
  let component: AddFormUserComponent;
  let fixture: ComponentFixture<AddFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
