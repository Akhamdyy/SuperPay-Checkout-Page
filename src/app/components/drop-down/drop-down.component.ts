import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {
  @Input() dropDownItem: any ;
  showDropDown: boolean = false;
  @Input()  id: number | null = null;
  @Output() currentId = new EventEmitter<number>();
  flag: boolean = false;

  getShowDropDown(){
    return this.showDropDown;
  }
  
  dropDownCheck() {
    if (this.id === null) {
      this.id = this.dropDownItem.id;
    }
    else if(this.id !== null) {
      this.id = this.dropDownItem.id;
    }
    if (this.id == this.dropDownItem.id) {
      if (this.dropDownItem.state == false) {
        this.currentId.emit(this.dropDownItem.id);
        this.flag=true;
        return;
      }
      else{
        this.currentId.emit(this.dropDownItem.id);
        this.flag=false;
        return;
      }
    } 
    else {
      return;
    }
  }
}