import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePiecesComponent } from './circle-pieces.component';

describe('CirclePiecesComponent', () => {
  let component: CirclePiecesComponent;
  let fixture: ComponentFixture<CirclePiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirclePiecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirclePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
