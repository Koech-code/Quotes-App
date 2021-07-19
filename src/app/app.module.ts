import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TimeCountPipe } from './time-count.pipe';
import { HighestUpvotesDirective } from './highest-upvotes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuotesFormComponent,
    TimeCountPipe,
    HighestUpvotesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
