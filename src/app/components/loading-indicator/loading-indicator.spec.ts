import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingIndicatorComponent } from './loading-indicator';
import { LoadingIndicatorService } from './loading-indicator.service';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;
  let service: LoadingIndicatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingIndicatorComponent],
      providers: [LoadingIndicatorService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoadingIndicatorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loading indicator when service emits true', (done) => {
    service.show();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const overlay = fixture.nativeElement.querySelector('.loading-overlay');
      expect(overlay).toBeTruthy();
      done();
    });
  });

  it('should hide loading indicator when service emits false', (done) => {
    service.hide();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const overlay = fixture.nativeElement.querySelector('.loading-overlay');
      expect(overlay).toBeFalsy();
      done();
    });
  });
});
