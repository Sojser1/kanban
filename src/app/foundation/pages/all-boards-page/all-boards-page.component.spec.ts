import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBoardsPageComponent } from './all-boards-page.component';

describe('AllBoardsPageComponent', () => {
  let component: AllBoardsPageComponent;
  let fixture: ComponentFixture<AllBoardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBoardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBoardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
