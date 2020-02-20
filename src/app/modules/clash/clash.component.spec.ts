import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashComponent } from './clash.component';

describe('ClashComponent', () => {
  let component: ClashComponent;
  let fixture: ComponentFixture<ClashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
