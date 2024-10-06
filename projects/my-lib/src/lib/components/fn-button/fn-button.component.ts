import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-fn-button',
  standalone: true,
  imports: [],
  templateUrl: './fn-button.component.html',
  styleUrl: './fn-button.component.css'
})
export class FnButtonComponent {
  @Input() label: string = 'Click'
  @Output() onClick= new EventEmitter<void>();

  clickHandler(){
    this.onClick.emit();
  }
}
