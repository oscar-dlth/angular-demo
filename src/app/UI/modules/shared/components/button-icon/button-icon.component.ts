import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.sass']
})
export class ButtonIconComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  @Input() isActive : Boolean = true;
  @Input() imgActive: string = '';
  @Input() imgInactive: string = '';
  @Input() customClass: string;
  @Input() size: number;

  defaultSize = 15;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.toggle.emit();
  }

  get imgSource(){
    return this.isActive ? this.imgActive: this.imgInactive;
  }
}
