import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  showDropDown: boolean = false;
  subscription: Subscription;
  id: number | null = null;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showDropDown = value));
  }

  dropDownItems: {id: number, class: string, text: string, content: string, state: boolean} []= [
    {
      id:1,
      class:'bi bi-credit-card-fill',
      text: 'Pay With Credit / Debit Card',
      content: 'Card Number 1',
      state: false,
    },
    {
      id:2,
      class: 'bi bi-bank',
      text: 'Buy Now Pay Later',
      content: 'Installment Plan 1',
      state: false,
    },
    {
      id:3,
      class:'bi bi-calendar2-range-fill',
      text: 'Bank Installment',
      content: 'Bank 1',
      state: false,
    }
  ] 

  toggleDropDown(id: number) {
    this.id = id;
  }
  
  onStateChange(currentid: number){ 
    for(let i=0; i < this.dropDownItems.length; i++){
      if(this.dropDownItems[i].id == currentid){
        this.dropDownItems[i].state = !this.dropDownItems[i].state;
      }
    }
  }
}
