import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashboardBootstrap } from './project-dashboard-bootstrap';

describe('ProjectDashboardBootstrap', () => {
  let component: ProjectDashboardBootstrap;
  let fixture: ComponentFixture<ProjectDashboardBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDashboardBootstrap],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDashboardBootstrap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
