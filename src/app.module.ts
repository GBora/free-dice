import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ResultComponent],
  bootstrap: [AppComponent, ResultComponent],
  exports: [AppComponent, ResultComponent]
})
export class AppModule { }