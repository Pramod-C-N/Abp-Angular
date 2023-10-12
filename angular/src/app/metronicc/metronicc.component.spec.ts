import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroniccComponent } from './metronicc.component';

describe('MetroniccComponent', () => {
  let component: MetroniccComponent;
  let fixture: ComponentFixture<MetroniccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetroniccComponent]
    });
    fixture = TestBed.createComponent(MetroniccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
