import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDeuxCardComponent } from './section-deux-card.component';

describe('SectionDeuxCardComponent', () => {
  let component: SectionDeuxCardComponent;
  let fixture: ComponentFixture<SectionDeuxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDeuxCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDeuxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
