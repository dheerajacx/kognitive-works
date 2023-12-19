import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferenceComponent } from './inference.component';

describe('InferenceComponent', () => {
  let component: InferenceComponent;
  let fixture: ComponentFixture<InferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InferenceComponent]
    });
    fixture = TestBed.createComponent(InferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
