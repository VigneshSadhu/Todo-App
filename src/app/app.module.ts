import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodotasksComponent } from './components/todotasks/todotasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TodotasksComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
