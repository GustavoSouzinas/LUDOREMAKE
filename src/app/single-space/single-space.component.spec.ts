import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSpaceComponent } from './single-space.component';

describe('SingleSpaceComponent', () => {
  let component: SingleSpaceComponent;
  let fixture: ComponentFixture<SingleSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
