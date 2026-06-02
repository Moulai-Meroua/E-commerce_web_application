import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SokComponent } from './sok.component';

describe('SokComponent', () => {
  let component: SokComponent;
  let fixture: ComponentFixture<SokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
