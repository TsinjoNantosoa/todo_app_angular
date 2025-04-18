import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component'; 

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodoListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }