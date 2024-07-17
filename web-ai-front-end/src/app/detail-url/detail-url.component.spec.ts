import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUrlComponent } from './detail-url.component';

describe('DetailUrlComponent', () => {
  let component: DetailUrlComponent;
  let fixture: ComponentFixture<DetailUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
