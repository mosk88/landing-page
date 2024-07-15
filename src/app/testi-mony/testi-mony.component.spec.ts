import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiMonyComponent } from './testi-mony.component';

describe('TestiMonyComponent', () => {
  let component: TestiMonyComponent;
  let fixture: ComponentFixture<TestiMonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestiMonyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestiMonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
