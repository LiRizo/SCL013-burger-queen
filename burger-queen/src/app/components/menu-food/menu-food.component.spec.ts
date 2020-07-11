import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFoodComponent } from './menu-food.component';

describe('MenuFoodComponent', () => {
  let component: MenuFoodComponent;
  let fixture: ComponentFixture<MenuFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
