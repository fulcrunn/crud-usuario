import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { InputFormComponent } from "./components/input-form/input-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputFormComponent
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
