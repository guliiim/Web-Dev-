import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyByComComponent } from './vacancy-by-com.component';

describe('VacancyByComComponent', () => {
  let component: VacancyByComComponent;
  let fixture: ComponentFixture<VacancyByComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyByComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyByComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
