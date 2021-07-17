import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote("ABRAHAM LINCOLN", "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time."),
    new Quote("HILLARY CLINTON", "The worst thing that can happen in a democracy as well as in an individual's life is to become cynical about the future and loose hope; that is the end, and we cannot let that happen."),
    new Quote("WILLIAM SHAKESPEARE", "If music be the food of  love, play on."),
    new Quote("C.S LEWIS", " Integrity is doing the right thing even when no one is watching."),
    new Quote("LILLIAN DICKSON", "Life is like a coin.You spend it anyway you wish, but you only spend it once."),
  ]
  toggleQuotes(index: any) {
    this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
  }

  completeQuote(isComplete: any, index: any) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
