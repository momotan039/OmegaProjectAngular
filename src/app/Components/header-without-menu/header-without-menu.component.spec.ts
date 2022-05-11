import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithoutMenuComponent } from './header-without-menu.component';

describe('HeaderWithoutMenuComponent', () => {
  let component: HeaderWithoutMenuComponent;
  let fixture: ComponentFixture<HeaderWithoutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithoutMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
