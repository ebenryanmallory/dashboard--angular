import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HNComponent } from './hn.component';

describe('TmdbComponent', () => {
  let component: HNComponent;
  let fixture: ComponentFixture<HNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
