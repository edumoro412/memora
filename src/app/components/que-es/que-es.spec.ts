import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEs } from './que-es';

describe('QueEs', () => {
  let component: QueEs;
  let fixture: ComponentFixture<QueEs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
