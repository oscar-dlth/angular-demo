import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toogle-button',
  templateUrl: './toogle-button.component.html',
  styleUrls: ['./toogle-button.component.sass']
})
export class ToogleButtonComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  @Input() isActive : Boolean = true;
  @Input() imgActive: string = '';
  @Input() imgInactive: string = '';

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
