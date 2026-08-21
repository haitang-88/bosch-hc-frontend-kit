import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeView2 } from './tree-view-2';

describe('TreeView2', () => {
  let component: TreeView2;
  let fixture: ComponentFixture<TreeView2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeView2],
    }).compileComponents();

    fixture = TestBed.createComponent(TreeView2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
