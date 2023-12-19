import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTasksComponent } from './related-tasks.component';

describe('RelatedTasksComponent', () => {
  let component: RelatedTasksComponent;
  let fixture: ComponentFixture<RelatedTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedTasksComponent]
    });
    fixture = TestBed.createComponent(RelatedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
