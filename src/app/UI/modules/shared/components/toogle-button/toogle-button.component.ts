import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toogle-button',
  templateUrl: './toogle-button.component.html',
  styleUrls: ['./toogle-button.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToogleButtonComponent),
      multi: true
    }
  ]
})
export class ToogleButtonComponent implements OnInit, ControlValueAccessor {

  @Input() isActive : boolean = true;
  @Input() imgActive: string = '';
  @Input() imgInactive: string = '';
  @Input() customClass: string;

  onChange: (value: boolean) => void;
  onTouched: () => void;
  onDisabledState: any;

  constructor() { }

  writeValue(value: boolean): void {
    this.isActive = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {
  }

  get imgSource(){
    return this.isActive ? this.imgActive: this.imgInactive;
  }

  toggleClick(){
    this.isActive = !this.isActive;
    this.onChange(this.isActive)
  }
}
