import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SspDistrictComponent } from './ssp-district.component';

describe('SspDistrictComponent', () => {
  let component: SspDistrictComponent;
  let fixture: ComponentFixture<SspDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SspDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SspDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
