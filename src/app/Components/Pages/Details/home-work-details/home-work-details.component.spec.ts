import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkDetailsComponent } from './home-work-details.component';

describe('HomeWorkDetailsComponent', () => {
  let component: HomeWorkDetailsComponent;
  let fixture: ComponentFixture<HomeWorkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWorkDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
