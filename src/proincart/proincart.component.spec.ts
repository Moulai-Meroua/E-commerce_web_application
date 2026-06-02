import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProincartComponent } from './proincart.component';

describe('ProincartComponent', () => {
  let component: ProincartComponent;
  let fixture: ComponentFixture<ProincartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProincartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProincartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
