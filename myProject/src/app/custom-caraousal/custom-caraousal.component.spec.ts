import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCaraousalComponent } from './custom-caraousal.component';

describe('CustomCaraousalComponent', () => {
  let component: CustomCaraousalComponent;
  let fixture: ComponentFixture<CustomCaraousalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCaraousalComponent]
    });
    fixture = TestBed.createComponent(CustomCaraousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
