import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { author: "ABRAHAM LINCOLN", theirQuotes: "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time." },
    { author: "HILLARY CLINTON", theirQuotes: "The worst thing that can happen in a democracy as well as in an individual's life is to become cynical about the future and loose hope; that is the end, and we cannot let that happen." },
    { author: "WILLIAM SHAKESPEARE", theirQuotes: "If music be the food of  love, play on." },
    { author: "C.S LEWIS", theirQuotes: " Integrity is doing the right thing even when no one is watching." },
    { author: "LILLIAN DICKSON", theirQuotes: "Life is like a coin.You spend it anyway you wish, but you only spend it once." },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
