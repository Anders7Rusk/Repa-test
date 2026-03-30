import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [disabled]="disabled" [ngClass]="[variant, size]" (click)="handleClick()">{{ label }}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: string = 'primary';
  @Input() size: string = 'medium';
  @Input() disabled: boolean = false;
  @Input() label: string = 'Click Me';
  @Output() clicked = new EventEmitter<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}