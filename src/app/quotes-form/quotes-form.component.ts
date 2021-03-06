import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote("", "", "", "", 0, 0, new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit(): void {
  }
  submitQuote() {
    this.addQuote.emit(this.newQuote);


  }

}
