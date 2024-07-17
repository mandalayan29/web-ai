import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlListPageComponent } from './url-list-page.component';

describe('UrlListPageComponent', () => {
  let component: UrlListPageComponent;
  let fixture: ComponentFixture<UrlListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
