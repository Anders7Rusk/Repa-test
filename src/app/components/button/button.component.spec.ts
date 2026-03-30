import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when clicked', () => {
    spyOn(component.click, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.click.emit).toHaveBeenCalled();
  });

  it('should have a default value for disabled input', () => {
    expect(component.disabled).toBeFalse();
  });

  it('should apply the correct class based on type input', () => {
    component.type = 'primary';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('btn-primary');
  });
});